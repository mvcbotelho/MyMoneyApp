import React, { Component } from 'react'

import Content from '../common/template/content'
import ContentHeader from '../common/template/contentHeader'
import Tabs from '../common/tab/tabs'
import TabsHeader from '../common/tab/tabsHeader'
import TabsContent from '../common/tab/tabsContent'
import TabHeader from '../common/tab/tabHeader'
import TabContent from '../common/tab/tabContent'

class BillingCycle extends Component {
  render () {
    return (
      <div>
        <ContentHeader title='Ciclos de Pagamento' small='Cadastro' />
        <Content>
          <Tabs>
            <TabsHeader>
              <TabHeader target='tabList' icon='bars' label='Listas' />
              <TabHeader target='tabCreate' icon='plus' label='Incluir' />
              <TabHeader target='tabUpdate' icon='pensil' label='Alterar' />
              <TabHeader target='tabDelete' icon='trash-o' label='Excluir' />
            </TabsHeader>
            <TabsContent>
              <TabContent id='tabList'><h1>Lista</h1></TabContent>
              <TabContent id='tabCreate'><h1>Incluir</h1></TabContent>
              <TabContent id='tabUpdate'><h1>Alterar</h1></TabContent>
              <TabContent id='tabDelete'><h1>Excluir</h1></TabContent>
            </TabsContent>
          </Tabs>
        </Content>
      </div>
    )
  }
}

export default BillingCycle