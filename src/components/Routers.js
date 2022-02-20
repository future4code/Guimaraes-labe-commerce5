import React from "react";
import { Switch, Route} from 'react-router-dom';
import { Produtos } from "./paginas/Produtos";



export default () => {
  return (
    <Switch>

        <Route path='/page1'>
            <Produtos />
        </Route>
    
    
    </Switch>
  )
}
