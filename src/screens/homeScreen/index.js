import React, { useEffect } from 'react'
import { Card, Button } from 'react-bootstrap'
import {withRouter} from 'react-router-dom'
import perritoActions from '../../actions/perrito'
import './homeScreen.css'
import { getDogs } from '../../mockRequests/perritos'
import { connect } from 'react-redux'

const Home = ({history, perrito, user, setList, setSelectedPerrito}) => {

    useEffect(()=> {
        const dogs = getDogs()
        setList(dogs)
    },[setList])

    const handleAdoptar = (dog) => {
        if(user.authUser){
            setSelectedPerrito(dog)
            
            history.push('/felicidades')
        }else{
            history.push('/login')
        }
    }
    return (
        <div className='contaner-fluid'>
            <h3 className='mt-4'> Adopta el cachorro que siempre has querido!</h3>
            <div className='row'>
                {perrito.list.map(dog => (
                    
                    <div key={dog.id} className='col-sm-12 col-md-4 mb-2'>

                        <Card style={{ width: '100%' }}>
                            <Card.Img variant="top" src={dog.img} />
                            <Card.Body>
                                <Card.Title>{dog.nombre}</Card.Title>
                                <Card.Text>
                                    
                                        {`genero: ${dog.genero}`}
                                   <br/>
                                        {`edad : ${dog.edad}`}
                                    
                                </Card.Text>
                                <Button 
                                    onClick={()=> handleAdoptar(dog)}
                                    variant="success">Adoptar!</Button>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    )
}


const mapStateToProps = ({user, perrito})=> ({
    user,
    perrito
})

const mapDispatchToProps = () => ({
    ...perritoActions
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps())(Home));
