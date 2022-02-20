# 二叉搜索树
## 简介
> 二叉搜索树（Binary Search Tree,BST）又叫二叉排序树，基于二分法查找思想设计的树。它的定义如下：
> 1. 它是一棵二叉树
> 2. 左子树的所有节点的值都小于它的根节点，右子树的所有节点的值都大于它的根节点
> 3. 左右子树也是一棵二叉搜索树

## 增加节点
```go
func (n *Node) Add(value int) {
	if value > n.Data {
		if n.Right == nil {
			n.Right = &Node{
				Left:  nil,
				Data:  value,
				Right: nil,
			}
		} else {
			n.Right.Add(value)
		}
	} else if value < n.Data {
		if n.Left == nil {
			n.Left = &Node{
				Left:  nil,
				Data:  value,
				Right: nil,
			}
		} else {
			n.Left.Add(value)
		}
	} else {
		fmt.Println(value, " already exist")
	}
}
```

## 查找节点
```go
func (n *Node) Find(value int) *Node {
	if n == nil {
		return nil
	}
	if n.Data == value {
		return n
	} else if n.Data > value {
		return n.Left.Find(value)
	} else {
		return n.Right.Find(value)
	}
}
```
测试
```go
func TestNode_Find(t *testing.T) {
	var node = &Node{
		Left:  nil,
		Data:  10,
		Right: nil,
	}
	node.Add(7)
	node.Add(8)
	node.Add(13)
	node.Add(14)
	result := node.Find(13)
	if result == nil || result.Data != 13 {
		t.Fatal("find fail")
	}
	t.Log(result.Data, result.Left, result.Right)

	result = node.Find(11)
	if result!=nil{
		t.Fatal("should be nil")
	}
}

```

## 查找父母节点
```go
func (n *Node) FindParent(value int) *Node {
	if n == nil {
		return nil
	}
	if n.Left != nil && value < n.Data {
		if n.Left.Data == value {
			return n
		} else {
			return n.Left.FindParent(value)
		}
	}
	if n.Right != nil && value > n.Data {
		if n.Right.Data == value {
			return n
		} else {
			return n.Right.FindParent(value)
		}
	}
	return nil
}
```
测试
```go
func TestNode_FindParent(t *testing.T) {
	var node = &Node{
		Left:  nil,
		Data:  10,
		Right: nil,
	}
	node.Add(7)
	node.Add(8)
	node.Add(13)
	node.Add(14)
	result:=node.FindParent(14)
	if result == nil || result.Data != 13 {
		t.Fatal("find parent fail")
	}
	t.Log(result.Data, result.Left, result.Right)
	result=node.FindParent(10)
	if result!=nil{
		t.Fatal("should be nil")
	}
	var nodeNil *Node
	result=nodeNil.FindParent(1)
	if result!=nil{
		t.Fatal("should be nil")
	}
}
```

## 删除节点
```go
func (n *Node) Delete(value int) *Node {
	node := n.Find(value)
	if node == nil {
		return n
	}
	parent := n.FindParent(value)
	if parent == nil { // 如果是根节点
		if node.Left == nil && node.Right == nil { // 根节点没有子树
			node = nil
			return nil
		}
		if node.Left != nil && node.Right != nil { // 根节点有两个子树
			// 从右子树找一个最小的值替换该节点的值
			minNode := node.Right
			for minNode.Left != nil {
				minNode = minNode.Left
			}
			node.Data = minNode.Data
			minNode.Delete(minNode.Data)
			return n
		}
		// 根节点节点有一个子树
		if node.Left != nil { // 有左子树
			node = node.Left
		} else if node.Right != nil { //有右子树
			node = node.Right
		}
		return node
	}
	// 不是根节点
	if node.Left == nil && node.Right == nil { // 删除节点没有子树
		if parent.Left != nil && value == parent.Left.Data { // 删除节点是父节点的左子树
			parent.Left = nil
		} else { // // 删除节点是父节点的右子树
			parent.Right = nil
		}
		return n
	}
	// 删除节点有左右子树
	if node.Left != nil && node.Right != nil {
		// 从右子树找一个最小的值替换该节点的值
		minNode := node.Right
		for minNode.Left != nil {
			minNode = minNode.Left
		}
		node.Data = minNode.Data
		minNode.Delete(minNode.Data)
		return n
	}
	// 删除节点有一个子树
	if node.Left != nil { //有左子树
		if parent.Left != nil && parent.Left.Data == value { // 删除节点是父节点的左子树
			parent.Left = node.Left
		} else { // 删除节点是父节点的右子树
			parent.Right = node.Left
		}
	} else {                                                 // 有右子树
		if parent.Left != nil && parent.Left.Data == value { // 删除节点是父节点的左子树
			parent.Left = node.Right
		} else { // 删除节点是父节点的右子树
			parent.Right = node.Right
		}
	}
	return n
}
```
测试
```go
func ExampleNode_Delete() {
	var node = &Node{
		Left:  nil,
		Data:  10,
		Right: nil,
	}
	node.Add(7)
	node.Add(8)
	node.Add(13)
	node.Add(14)
	node.Print()
	fmt.Println()
	node = node.Delete(7)
	node.Print()
	fmt.Println()
	node = node.Delete(14)
	node.Print()
	fmt.Println()
	node = node.Delete(8)
	node.Print()
	fmt.Println()
	node = node.Delete(10)
	node.Print()
	// Output:
	// 10(7(,8),13(,14))
	// 10(8,13(,14))
	// 10(8,13)
	// 10(,13)
	// 13
}
```

# 总结
> 二叉搜素树采用二分法思想，查找效率高
> 
> 但是二叉搜索树具有不平衡性，容易出现斜树

![斜树](../images/slanted-tree.png)