import React, { useState } from 'react'
import { Body, Cell, Header, HeaderCell, HeaderRow, Row, Table } from '@table-library/react-table-library/table'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, deleteTodo, toggleCompleted } from '../todoSlice'

const TodoTable = () => {
    const [text, setText] = useState("");
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();

    const handleInputChange = (e) => {
        setText(e.target.value);
    };
    const handleAddTodo = () => {
        if (text) {
          dispatch(addTodo(text));
          setText("");
        }
      };
    
    const handleToggleComplete = (id) => {
    dispatch(toggleCompleted(id));
    };

    const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
    };
    const data = { nodes: todos}
    console.log(todos)
    // console.log(data)
  return (
    <div>

    <Table data={data}>
      {(tableList) => (
        <>
           <Header>
          <HeaderRow>
            <HeaderCell>Task</HeaderCell>
            <HeaderCell>Deadline</HeaderCell>
            <HeaderCell>Complete</HeaderCell>
          </HeaderRow>
        </Header>

          <Body>
            {tableList.map((item) => (
              <Row key={item.id} item={item}>
                <Cell>{item.text}</Cell>
                <Cell>
                  {new Date(item.id).toLocaleDateString(
                    'en-US',
                    {
                      year: 'numeric',
                      month: '2-digit',
                      day: '2-digit',
                    }
                  )}
                </Cell>
                <Cell>{item.completed.toString()}</Cell>
              </Row>
            ))}
          </Body>
        </>
      )}
    </Table>
    <input type="text" value={text} onChange={handleInputChange} />{" "}
      <button onClick={handleAddTodo}> Add Todo </button>{" "}
      <ul>
        {" "}
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
            }}
          >
            {todo.text}{" "}
            <button onClick={() => handleToggleComplete(todo.id)}>
              {" "}
              {todo.completed ? "Mark Incomplete" : "Mark Complete"}{" "}
            </button>{" "}
            <button onClick={() => handleDeleteTodo(todo.id)}> Delete </button>{" "}
          </li>
        ))}{" "}
      </ul>{" "}
      </div>
  )
}

export default TodoTable
