import React, { Component } from 'react'

import Content from '../common/template/content'
import ContentHeader from '../common/template/contentHeader'
import Tabs from '../common/tab/tabs'
import TabsHeader from '../common/tab/tabsHeader'
import TabsContent from '../common/tab/tabsContent'
import TabHeader from '../common/tab/tabHeader'

class BillingCycle extends Component {
  render () {
    return (
      <div>
        <ContentHeader title='Ciclos de Pagamento' small='Cadastro' />
        <Content>
          <Tabs>
            <TabsHeader>
              <TabHeader taget='tabList' icon='bars' label='Listas' />
              <TabHeader taget='tabCreate' icon='plus' label='Incluir' />
              <TabHeader taget='tabUpdate' icon='pensil' label='Alterar' />
              <TabHeader taget='tabDelete' icon='trash-o' label='Excluir' />
            </TabsHeader>
            <TabsContent>
            </TabsContent>
          </Tabs>
        </Content>
      </div>
    )
  }
}

export default BillingCycle