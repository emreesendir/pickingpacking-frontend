import { useState, useRef, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { checkAccessRights } from '../../global/Services'
import Header from '../../global/Header'
import Counter from './components/Counter'

const Dashboard = () => {


    return (
        <div>
            <Header activePage='Dashboard'/>
            <h1>Today</h1>
            <Counter title='Orders On Queue' endpoint='counter/orders-on-queue/'/>
            <Counter title='Orders Shipped' endpoint='counter/orders-shipped-today/'/>
            <Counter title='Orders On Hold' endpoint='counter/orders-on-hold/'/>
            <h1>Last Week</h1>
            <Counter title='Orders Shipped' endpoint='counter/orders-shipped-last-week/'/>
            <h1>Last Month</h1>
            <Counter title='Orders Shipped' endpoint='counter/orders-shipped-last-month/'/>
        </div>
    )
}

export default Dashboard