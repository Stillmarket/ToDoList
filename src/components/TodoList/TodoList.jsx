import React, {useEffect, useState} from 'react'
import {Button, ButtonGroup, Col, Row} from "react-bootstrap";
import s from './TodoList.module.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSave, faTrash, faEdit, faLock, faLockOpen} from '@fortawesome/free-solid-svg-icons'

const TodoList = ({todo, setTodo}) => {
    const [edit, setEdit] = useState(null)
    const [value, setValue] = useState('')
    const [filtered, setFiltered] = useState(todo)

    useEffect(() => {
        setFiltered(todo)
    }, [todo])

    const todoFilter = (status) => {
        if (status === 'all') {
            setFiltered(todo)
        } else {
            let newTodo = [...todo].filter(item => item.status === status)
            setFiltered(newTodo)
        }
    }

    const saveTodo = (id) => {
        let newTodo = [...todo].map(item => {
            if (item.id === id) {
                item.title = value
            }
            return item
        })
        setTodo(newTodo)
        setEdit(null)
    }
    const deleteTodo = (id) => {
        let newTodo = [...todo].filter(item => item.id !== id)
        setTodo(newTodo)
    }
    const statusTodo = (id) => {
        let newTodo = [...todo].filter(item => {
            if (item.id === id) {
                item.status = !item.status
            }
            return item
        })
        setTodo(newTodo)
    }
    const editTodo = (id, title) => {
        setEdit(id)
        setValue(title)
    }

    return (
        <div>
            <Row>
                <Col className={s.filter}>
                    <ButtonGroup aria-label="Basic example" className={s.btn}>
                        <Button variant="secondary" onClick={() => todoFilter('all')}> All </Button>
                        <Button variant="secondary" onClick={() => todoFilter(true)}> Open task </Button>
                        <Button variant="secondary" onClick={() => todoFilter(false)}> Closed task </Button>
                    </ButtonGroup>
                </Col>
            </Row>

            {
                filtered.map(item => (
                    <div key={item.id} className={s.items}>
                        {
                            edit === item.id ?
                                <div>
                                    <input value={value} onChange={(e) => setValue(e.target.value)}/>
                                </div> :
                                <div className={!item.status ? s.close : ''}> {item.title}</div>
                        }
                        {
                            edit === item.id ?
                                <div>
                                    <Button onClick={() => saveTodo(item.id)} size='sm'> <FontAwesomeIcon
                                        icon={faSave}/></Button>
                                </div> :
                                <div>
                                    <Button onClick={() => deleteTodo(item.id)} size='sm'> <FontAwesomeIcon
                                        icon={faTrash}/></Button>
                                    <Button onClick={() => editTodo(item.id, item.title)} className={s.bt} size='sm'>
                                        <FontAwesomeIcon icon={faEdit}/></Button>
                                    <Button onClick={() => statusTodo(item.id)} className={s.bt} size='sm'>
                                        {
                                            item.status ? <FontAwesomeIcon icon={faLockOpen}/> :
                                                <FontAwesomeIcon icon={faLock}/>}
                                    </Button>
                                </div>
                        }
                    </div>
                ))
            }
        </div>)
}

export default TodoList;


