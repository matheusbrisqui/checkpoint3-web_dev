import {} from 'react'
/*Aqui que eu impotei as imagens da rede social*/
import {AiFillFacebook as Facebook} from 'react-icons/ai'
import {AiFillInstagram as Instagram} from 'react-icons/ai'
import {AiFillLinkedin as Linkedin} from 'react-icons/ai'
import {MdEmail as Email} from 'react-icons/md'


function Footer() {
  return (
    <>
    <Facebook />
    <Instagram />
    <Linkedin />
    <Email />
    
    <h3>@2023-todos os direitos reservados</h3>
    </>
  )
}

export default Footer
