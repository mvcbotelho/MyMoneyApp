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
import { create, update } from './billingCycleActions'

import List from './billingCycleList'
import Form from  './billingCycleForms'

import { selectTab } from '../common/tab/tabActions'
import { showTabs } from '../common/tab/tabActions'

class BillingCycle extends Component {

  componentWillMount () {
    this.props.selectTab('tabList')
    this.props.showTabs('tabList', 'tabCreate')
  }
  
  render () {
    return (
      <div>
        <ContentHeader title='Ciclos de Pagamento' small='Cadastro' />
        <Content>
          <Tabs>
            <TabsHeader>
              <TabHeader target='tabList' icon='bars' label='Listas' />
              <TabHeader target='tabCreate' icon='plus' label='Incluir' />
              <TabHeader target='tabUpdate' icon='pencil' label='Alterar' />
              <TabHeader target='tabDelete' icon='trash-o' label='Excluir' />
            </TabsHeader>
            <TabsContent>
              <TabContent id='tabList'>
                <List />
              </TabContent>
              <TabContent id='tabCreate'>
                <Form onSubmit={this.props.create} />
              </TabContent>
              <TabContent id='tabUpdate'>
                <Form onSubmit={this.props.update}/>
              </TabContent>
              <TabContent id='tabDelete'><h1>Excluir</h1></TabContent>
            </TabsContent>
          </Tabs>
        </Content>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({selectTab, showTabs, create, update}, dispatch)
export default connect(null, mapDispatchToProps)(BillingCycle)