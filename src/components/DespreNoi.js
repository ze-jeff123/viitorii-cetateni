import React from 'react'
import Layout from './Layout'
import styled from 'styled-components'
import theme from '../global/theme'
import Container from '@mui/material/Container';

const StyledContainer = styled.div`
    margin-top : 25px;
    display : flex;
    font-size : 1.1rem;
    flex-direction : column;    
    align-items : center;
    h1 {
        border-bottom : 3px solid ${theme.headerDarkBlue};
        padding-bottom : 10px;
        width:fit-content;
    }
    p {
        color : ${theme.textGray};
    }
`


const ProfileHolder = styled.div`
    display : flex;
    flex-direction : column;
    align-items : center;
`
const ProfileImage = styled.div`
    width : 250px;
    height : 250px;
    background-color : gray;
    border-radius : 50%;
`

const Team = styled.div`
    gap : 15px;
    display : flex;
    margin-bottom : 20px;
`
export default function DespreNoi() {
    return (
        <Layout>
            <Container maxWidth='md'>
                <StyledContainer>
                    <h1>Despre noi</h1>
                    <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>
                    <h1>Echipa</h1>
                    <Team>
                        <ProfileHolder>
                            <ProfileImage></ProfileImage>
                            <p>
                                "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
                            </p>
                        </ProfileHolder>
                        <ProfileHolder>
                            <ProfileImage></ProfileImage>
                            <p>
                                "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
                            </p>
                        </ProfileHolder>
                    </Team>
                </StyledContainer>
            </Container>
        </Layout>
    )
}
