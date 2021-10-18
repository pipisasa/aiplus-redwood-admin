import {
  menuItems,
  menuItem,
  createMenuItem,
  updateMenuItem,
  deleteMenuItem,
} from './menuItems'
import type { StandardScenario } from './menuItems.scenarios'

describe('menuItems', () => {
  scenario('returns all menuItems', async (scenario: StandardScenario) => {
    const result = await menuItems()

    expect(result.length).toEqual(Object.keys(scenario.menuItem).length)
  })

  scenario('returns a single menuItem', async (scenario: StandardScenario) => {
    const result = await menuItem({ id: scenario.menuItem.one.id })

    expect(result).toEqual(scenario.menuItem.one)
  })

  scenario('creates a menuItem', async () => {
    const result = await createMenuItem({
      input: {
        titleRu: 'String',
        titleKz: 'String',
        link: 'String',
        orderNumber: 7171337,
      },
    })

    expect(result.titleRu).toEqual('String')
    expect(result.titleKz).toEqual('String')
    expect(result.link).toEqual('String')
    expect(result.orderNumber).toEqual(7171337)
  })

  scenario('updates a menuItem', async (scenario: StandardScenario) => {
    const original = await menuItem({ id: scenario.menuItem.one.id })
    const result = await updateMenuItem({
      id: original.id,
      input: { titleRu: 'String2' },
    })

    expect(result.titleRu).toEqual('String2')
  })

  scenario('deletes a menuItem', async (scenario: StandardScenario) => {
    const original = await deleteMenuItem({ id: scenario.menuItem.one.id })
    const result = await menuItem({ id: original.id })

    expect(result).toEqual(null)
  })
})
