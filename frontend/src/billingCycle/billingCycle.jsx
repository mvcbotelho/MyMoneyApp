import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Content from '../common/template/content'
import ContentHeader from '../common/template/contentHeader'
import Tabs from '../common/tab/tabs'
import TabsHeader from '../common/tab/tabsHeader'
import TabsContent from '../common/tab/tabsContent'
import TabHeader from '../common/tab/tabHeader'
import TabContent from '../common/tab/tabContent'
import { init, create, update, remove } from './billingCycleActions'

import List from './billingCycleList'
import Form from  './billingCycleForms'

class BillingCycle extends Component {

  componentWillMount () {
    this.props.init()
  }
  
  render () {
    return (
      <div>
        <ContentHeader title='Ciclos de Pagamento' small='Cadastro' />
        <Content>
          <Tabs>
            <TabsHeader>
              <TabHeader target='tabList' icon='bars' label='  Listas' />
              <TabHeader target='tabCreate' icon='plus' label='  Incluir' />
              <TabHeader target='tabUpdate' icon='pencil' label='  Alterar' />
              <TabHeader target='tabDelete' icon='trash-o' label='  Excluir' />
            </TabsHeader>
            <TabsContent>
              <TabContent id='tabList'>
                <List />
              </TabContent>
              <TabContent id='tabCreate'>
                <Form onSubmit={this.props.create} submitClass='primary' submitLabel='Incluir' />
              </TabContent>
              <TabContent id='tabUpdate'>
                <Form onSubmit={this.props.update} submitClass='info' submitLabel='Editar' />
              </TabContent>
              <TabContent id='tabDelete'>
                <Form onSubmit={this.props.remove} submitClass='danger' submitLabel='Excluir' readOnly='true'/>
              </TabContent>
            </TabsContent>
          </Tabs>
        </Content>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({init, create, update, remove}, dispatch)
export default connect(null, mapDispatchToProps)(BillingCycle)