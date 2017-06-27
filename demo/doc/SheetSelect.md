---
imports:
    import {Sheet, SheetColumn, SheetSelect, Flex} from '../../src/index';
---
## SheetSelect

::: demo 操作行为
```js
class SheetWrap extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            list: [{
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
                  }]
        };
        
        this.handleSelect = ::this.handleSelect;
        this.handleSelectAll = ::this.handleSelectAll;
        this.isDisabled = ::this.isDisabled;
    }
    
    handleSelect(checked, index){
        console.log('onSelect', checked, index);
        const list = [...this.state.list];
        list[index]._gm_select = checked;
        this.setState({
            list
        });
    }
    
    handleSelectAll(checked, index){
        console.log('onSelectAll', checked, index);
        const list = [...this.state.list];
        list.map(line => {
            if(!this.isDisabled(line))
                line._gm_select = checked;
        });
        this.setState({
            list
        });
    }
    
    isDisabled(line){
        return line.age > 18;
    }
    
    render() {
        return (
           <Sheet list={this.state.list}>
               <SheetColumn field="id" name="id"/>
               <SheetColumn field="name" name="名字"/>
               <SheetColumn field="age" name="年龄"/>
               <SheetSelect 
                   onSelect={this.handleSelect} 
                   onSelectAll={this.handleSelectAll}
                   isDisabled={this.isDisabled}
               />
           </Sheet>
        );
    }
}
```
```jsx
<SheetWrap/>
```
:::

### Props
- `onSelect (func|isRequired)`
- `onSelectAll (func|isRequired)`
- `isDisabled (func)`

一但用到`SheetSelect`，就约定了数据eList中的`_gm_select`字段，`_gm_select`为bool是选中。
`onSelect`当选择一行时触发，参数为是否选中`checked`，和当前索引`index`。
`onSelectAll`当选择所有的时候触发，参数为是否选择`checked`。
需要根据select事件自动修改_gm_select属性。
`isDisabled`参数为当前行数据，返回`true`or`false`，表示是当前行是否可被选中
