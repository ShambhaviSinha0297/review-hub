import React, { useEffect } from 'react';
import { pullRequests as mockData } from '../mocks/mockData';
import './prList.css';
import CircleIcon from '@mui/icons-material/Circle';

const PRList = () => {
    const [prList, setPrList] = React.useState([]);

    useEffect(() => {
        const fetchPrs = async () => {
            setPrList(mockData);
        }
        fetchPrs();
    }, [])

    return (
        <div className='pr-list'>
            {
                prList.map((pr) => {
                    return (
                        <div key={pr.id} className='each-pr'>
                            <div className='pr-title'>feat:{pr.title}</div>
                            <div>#{pr.id}
                                <span>{' '}
                                    ● opened {pr.openedAt} by {pr.author.name} </span>
                                <span>
                                    ● base {pr.base}</span>
                            </div>
                            <div className='label-section'>
                                {
                                    pr.labels.map((label, index) => {
                                        return (
                                            <div>
                                                <div>{label.name}</div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default PRList
