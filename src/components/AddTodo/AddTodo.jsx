import React, {useState} from 'react'
import * as uuid from "uuid";
import {Col, Row, Button, FormControl} from "react-bootstrap";
import s from './AddTodo.module.css'


const AddTodo = ({todo, setTodo}) => {
    const [value, setValue] = useState('')
    const saveTodo = () => {
        if (value) {
            setTodo(
                [...todo, {
                    id: uuid.v4(),
                    title: value,
                    status: true
                }]
            )
            setValue('')
        }
    }
    return (
        <Row>
            <Col className={s.addTodo}>
                <FormControl placeholder='Enter the task' value={value} onChange={(e) => setValue(e.target.value)}/>
                <Button onClick={saveTodo} className={s.bt}> Add </Button>
            </Col>
        </Row>
    )
}


export default AddTodo;