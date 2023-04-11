import React from 'react'
import { Box, Container, Typography } from '@mui/material'



function Footer() {


    return (
        <footer className="footer">
            <Container maxWidth="lg">
                <Box sx={{ py: 3 }}>
                  <div className="footer__social">
                    <a href="https://www.linkedin.com/in/laisefrance/" target="_blank" rel="noreferrer">
                      <img src="https://img.icons8.com/color/48/000000/linkedin.png" alt="linkedin" />
                    </a>
                    <a href="http://www.github.com/laifrance" target="_blank" rel="noreferrer">
                      <img src="https://img.icons8.com/color/48/000000/github--v1.png" alt="github" />
                    </a>
                    <a href="https://www.instagram.com/laifrance/" target="_blank" rel="noreferrer">
                      <img src="https://img.icons8.com/color/48/000000/instagram-new--v1.png" alt="instagram" />
                    </a>
                    <div className="footer__social__email">
                      <a href="mailto:laise94@hotmail.com">
                        <img src="https://img.icons8.com/color/48/000000/email.png" alt="email" />
                      </a>
                      <a className='whatsapp' href="https://api.whatsapp.com/send?phone=5581992913270" target="_blank" rel="noreferrer">
                        <img src="https://img.icons8.com/color/48/000000/whatsapp--v1.png" alt="whatsapp" />
                      </a>

                    </div>

                  </div>
                    <Typography variant="body1" align="center" color="textSecondary" component="p">
                        © 2021 - Todos os direitos reservados
                    </Typography>
                </Box>
            </Container>
        </footer>
    )
    }

export default Footer
