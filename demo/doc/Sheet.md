---
imports:
    import {Sheet, SheetColumn, Flex} from '../../src/index';
---
## Sheet

更React风格化。给开发者更多控制，更多灵活。

配合的组件[SheetColumn](#/doc/SheetColumn) [SheetAction](#/doc/SheetAction) [SheetSelect](#/doc/SheetSelect) [SheetBatchAction](#/doc/SheetBatchAction) [Pagination](#/doc/Sheet?anchor=pagination-paginationtext)

::: demo 一个简单的demo
```js
const list= [{
    id: 3,
    name: '小明',
    age: '10'
}, {
    id: 4,
    name: '小红',
    age: '15',
    _gm_select: true
}, {
   id: 5,
   name: '小蓝',
   age: '20'
}];
```
```jsx
<Sheet list={list}>
    <SheetColumn field="id" name="id"/>
    <SheetColumn field="name" name="名字"/>
    <SheetColumn field="age" name="年龄"/>
</Sheet>
```
:::

::: demo loading 和 没有数据
```jsx
<Flex>
    <Flex flex column> 
        <Sheet list={list} loading={true}>
            <SheetColumn field="id" name="id"/>
            <SheetColumn field="name" name="名字"/>
            <SheetColumn field="age" name="年龄"/>
        </Sheet>
    </Flex>
    <div className="gm-padding5"/>
    <Flex flex column> 
        <Sheet list={[]} enableEmptyTip>
            <SheetColumn field="id" name="id"/>
            <SheetColumn field="name" name="名字"/>
            <SheetColumn field="age" name="年龄"/>
        </Sheet>
    </Flex>
</Flex> 
```
:::

::: demo tr传props自定义行
```jsx
<Sheet list={list} getTrProps={index => (index === 1 ? {
    className: 'warning'
} : {})}>
    <SheetColumn field="id" name="id"/>
    <SheetColumn field="name" name="名字"/>
    <SheetColumn field="age" name="年龄"/>
</Sheet>
```
:::

::: demo table 滚动。但是要调用方保证可滚动。 比如没有足够的宽度。
```jsx
<div style={{width: '300px'}}>
    <Sheet list={list} scrollX>
        <SheetColumn field="id" name="id"/>
        <SheetColumn field="name" name="名字"/>
        <SheetColumn field="age" name="年龄"/>
        <SheetColumn field="id" name="id"/>
        <SheetColumn field="name" name="名字"/>
        <SheetColumn field="age" name="年龄"/>
        <SheetColumn field="id" name="id"/>
        <SheetColumn field="name" name="名字"/>
        <SheetColumn field="age" name="年龄"/>
        <SheetColumn field="id" name="id"/>
        <SheetColumn field="name" name="名字"/>
        <SheetColumn field="age" name="年龄"/>
        <SheetColumn field="id" name="id"/>
        <SheetColumn field="name" name="名字"/>
        <SheetColumn field="age" name="年龄"/>
        <SheetColumn field="id" name="id"/>
        <SheetColumn field="name" name="名字"/>
        <SheetColumn field="age" name="年龄"/>
    </Sheet>
</div>
```
:::

### Props
- `list (Array|isRequired)` 是列表的数据，最好是数组。 当然有人没注意传了obj（非常不推荐）。
- `loading (bool)` true显示loading状态，false显示数据
- `enableEmptyTip (bool|string|element)` true则显示默认的“没有数据”文案，其他值string or element则直接显示 
- `className (string)`
- `getTrProps (func)` 自定义`tr`的props，提供`index`索引，返回 object。
- `scrollX (bool)` 是否允许table横向滚动。 但是table是否具备横向滚动的条件要调用方保证

### Pagination PaginationText

如需页码传入`Pagination`或者`PaginationText`组件。 
Sheet会自动安排在页码应该什么位置。一般只用Pagination就好。

```jsx
<Pagination data={this.state.pagination} toPage={this.handlePage}/>
<PaginationText data={this.state.pagination}/>
```