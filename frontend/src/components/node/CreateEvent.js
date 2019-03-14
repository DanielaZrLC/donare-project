import React, { Component } from 'react'
import axios from 'axios';
import {  Button, Input, AutoComplete, Comment, Form, List,Row, Col} from 'antd'; //
import FormItem from 'antd/lib/form/FormItem';


const dataSource =['Grupo Voluntario Mexicano-Alemán', 'Fundación Jaguar Negro Tigre Blanco', 'Océanos Vivientes','8 Rainforest Alliance México','Naturalia, Comité para la Conservación de Especies Silvestres', 'Fundación Universidad Nacional Autónoma de México', 'Grupo de Ecología y Conservación de Islas','Trasplante y Vida','ProSalud y Lucha Contra el Cancer','Proteccion Integral para la Mujer y la Niñez','Milagros Caninos','Culturas y Artes Populares','Greenpeace México','Reforestamos México','Protectora Nacional de Animales','Andes Animales Desamparados']



//comentarios
const TextArea = Input.TextArea;
const CommentList = ({ comments }) => (
  <List
    dataSource={comments}
    header={`${comments.length} ${comments.length > 1 ? 'replies' : 'reply'}`}
    itemLayout="horizontal"
    renderItem={props => <Comment {...props} />}
/>)
const Editor = ({ onChange, onSubmit, submitting, value, }) => (
  <div>
    <Form.Item> <TextArea rows={4} onChange={onChange} value={value} /> </Form.Item>
    <Form.Item>
      <Button htmlType="submit" loading={submitting} onClick={onSubmit} type="primary">
        Descripción
      </Button>
    </Form.Item>
  </div>
);
//comentarios


//ongs
function Complete() {
  return (
    <AutoComplete
      style={{ width: 200 }}
      dataSource={dataSource}
      placeholder="Ingresa la ONG"
      filterOption={(inputValue, option) => option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1}
    />
  );
}

export class CreateEvent extends Component {
  state={
    user:{},
    name:{},
    cause:{},
    newEvent:{},
    profilePic: {},
    comments: [],
    submitting: false,
    value: ''
  }
  

  componentWillMount() {
    console.log(this.props)
    let { user } = this.state
    user = this.props.user
    this.setState({user})
  }

  handleChange = (e) =>{
    let {newEvent, user} = this.state
    this.setState({
      value: e.target.value
    })

    newEvent["owner"] = user._id
    newEvent[e.target.name] = e.target.value
    console.log(newEvent)
    this.setState = ({newEvent})
  }


  handleSubmit = () => {
    if (!this.state.value) {
      return;
    }
    this.setState({
      submitting: true,
    });


    
//comentarios
    setTimeout(() => {
      this.setState({
        submitting: false,
        value: '',
        comments: [
          {
            author: 'Dany',
            avatar: 'https://img.icons8.com/color/160/gremlin2.png',
            content: <p>{this.state.value}</p>,
          },
          ...this.state.comments,
        ],
      });
    }, 1000);
  }

  handleChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  }
 /////


  sendToServer = e => {
    console.log(this.state.user)
    e.preventDefault()
    let { newEvent } = this.state
    let url = `${process.env.REACT_APP_API_URL}/createEvent`
    axios.post(url, newEvent, { withCredentials: true })
      .then(res => {
        console.log(res)
        this.props.history.push('/allMyEvents')

      })
      .catch(e => console.log(e))
  }


  render() {
    const { comments, submitting, value } = this.state;
    return (
    <div className="newEventform">
     
<Row style={{marginTop: '50px', width:'80%'}}>
    <Col xs={{ span: 5, offset: 1 }} lg={{ span: 10, offset: 2 }}>
    <FormItem>
         <Input type="text" name="name" placeholder="Nombre de mi evento" onChange ={this.handleChange}/>
      </FormItem>
  
    <label style={{color: 'white'}} >Fecha del evento: </label>
     <FormItem>
        <Input type="date" name="date" onChange ={this.handleChange}/>
     </FormItem>
    </Col>


    <Col xs={{ span: 5, offset: 1 }} lg={{ span: 10, offset: 2 }}>
    <label style={{color: 'white'}} >Nombre de la ONG</label>
    <Complete />

        {comments.length > 0 && <CommentList comments={comments} />}
        <Comment
          content={(
            <Editor
              onChange={this.handleChange}
              onSubmit={this.handleSubmit}
              submitting={submitting}
              value={value}
            />
          )}
        />
        <Button type="primary" onClick={this.sendToServer} htmlType="submit" loading={submitting}>Crear evento</Button>
        </Col>
  </Row>,

   
  </div>

    )
  }
}


export default CreateEvent
