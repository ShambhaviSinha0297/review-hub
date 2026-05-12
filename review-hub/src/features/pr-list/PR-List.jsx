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

    const reviewTheme = (label) => {
        switch (label) {
            case 'In review':
                return '#ffffb3';
            case 'Approved':
                return '#ccffcc';
            case 'Changes requested':
                return '#ffcccc';
            case 'Draft':
                return '#e6e6e6';
            default:
                return '#f0f0f0';
        }
    }

    return (
        <div className='pr-list'>
            {
                prList.map((pr) => {
                    return (
                        <div className='full-section'>
                            <div key={pr.id} className='each-pr'>
                                <div className='pr-title'>feat:{pr.title}</div>
                                <div>#{pr.id}
                                    <span>{' '}
                                        ● opened {pr.openedAt} by <strong>{pr.author.name}</strong> </span>
                                    <span>
                                        ● base: {pr.base}</span>
                                </div>
                                <div className='label-section'>
                                    {
                                        pr.labels.map((label, index) => {
                                            return (
                                                <div>
                                                    <div style={{
                                                        backgroundColor: label.color,
                                                        padding: '2px 6px',
                                                        borderRadius: '4px',
                                                        fontSize: '0.75rem',
                                                    }}>{label.name}</div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                            <div>
                                <span className='review-status'
                                    style={
                                        { backgroundColor: reviewTheme(pr.reviewStatus.label) }
                                        }>
                                    {pr.reviewStatus.label}
                                </span>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default PRList
