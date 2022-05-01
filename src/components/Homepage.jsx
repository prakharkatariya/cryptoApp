import React from 'react';
// import millify from 'millify';
import { Typography, Row, Col, Statistic } from 'antd';
// import { Link } from 'react-router-dom';
import { useGetCryptosQuery } from '../services/cryptoApi'

const Homepage = () => {
    const { Title } = Typography
    const { data, isFetching } = useGetCryptosQuery()
    console.log(data,useGetCryptosQuery(),'lol')

    return (
        <>
            <Title className='heading' level={2}>Global crypto stats</Title>
            <Row gutter={[32, 32]}>
                <Col span={12}><Statistic title="Total Cryptocurrencies" value={12} /></Col>
                <Col span={12}><Statistic title="Total Exchanges" value={12} /></Col>
                <Col span={12}><Statistic title="Total Market Cap:" value={12} /></Col>
                <Col span={12}><Statistic title="Total 24h Volume" value={12} /></Col>
                <Col span={12}><Statistic title="Total Cryptocurrencies" value={12} /></Col>
                <Col span={12}><Statistic title="Total Markets" value={12} /></Col>
            </Row>
        </>
    )
}

export default Homepage
