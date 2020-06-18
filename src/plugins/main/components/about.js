import React, { Fragment } from 'react';
import { assetUrl } from "fusion-core";
import { Image, List, Header } from 'semantic-ui-react'


const About = () => (<Fragment>
  <Header size="medium">Created By:</Header>
  <List>
    <List.Item style={{marginBottom: 10}}>
      <Image style={{marginRight: 10, marginTop: 3}} avatar src={assetUrl('../../../../img/matt.jpg')} />
      <List.Content>
        <List.Header>Abu Wildan Mucholladin</List.Header>
        <List.Item><a href='mailto:abuwildanm@gmail.com'>abuwildanm@gmail.com</a></List.Item>
      </List.Content>
    </List.Item>
    <List.Item style={{marginBottom: 10}}>
      <Image style={{marginRight: 10, marginTop: 3}} avatar src={assetUrl('../../../../img/matthew.png')} />
      <List.Content>
        <List.Header>Yusuf Fajar Mukti</List.Header>
        <List.Item><a href='mailto:yusufajarmoekti@gmail.com'>yusufajarmoekti@gmail.com</a></List.Item>
      </List.Content>
    </List.Item>
    <List.Item style={{marginBottom: 10}}>
      <Image style={{marginRight: 10, marginTop: 3}} avatar src={assetUrl('../../../../img/christian.jpg')} />
      <List.Content>
        <List.Header>Reizkian Yesaya Radityatama</List.Header>
        <List.Item><a href='mailto:reizkianyesaya@gmail.com'>reizkianyesaya@gmail.com</a></List.Item>
      </List.Content>
    </List.Item>
    <List.Item style={{marginBottom: 10}}>
      <Image style={{marginRight: 10, marginTop: 3}} avatar src={assetUrl('../../../../img/tom.jpg')} />
      <List.Content>
        <List.Header>Virgiawan Huda Akbar</List.Header>
        <List.Item><a href='mailto:virgiawan.huda.akbar@gmail.com'>virgiawan.huda.akbar@gmail.com</a></List.Item>
      </List.Content>
    </List.Item>
  </List>

  <Header size="medium" style={{marginTop: 60}}>Collaborate With:</Header>
  <div>
    <p>The enforcement of stadium and symptoms rules was helped by dr. Silvia.</p>
  </div>
  <List>
    <List.Item style={{marginBottom: 10}}>
      <Image style={{marginRight: 10, marginTop: 3}} avatar src={assetUrl('../../../../img/rachel.png')} />
      <List.Content>
        <List.Header>dr. Silvia Rufaida Yunanti</List.Header>
        <List.Item><a href='mailto:silvia.rufaida@gmail.com'>silvia.rufaida@gmail.com</a></List.Item>
      </List.Content>
    </List.Item>
  </List>

  <Header size="medium" style={{marginTop: 60}}>References:</Header>
  <List as='ul'>
    <List.Item as='li'><a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3635581/" target="blank">https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3635581/</a></List.Item>
    <List.Item as='li'><a href="https://emedicine.medscape.com/article/2007147-overview#a1" target="blank">https://emedicine.medscape.com/article/2007147-overview#a1</a></List.Item>
    <List.Item as='li'><a href="https://www.nhs.uk/conditions/melanoma-skin-cancer/treatment/" target="blank">https://www.nhs.uk/conditions/melanoma-skin-cancer/treatment/</a></List.Item>
    <List.Item as='li'><a href="https://emedicine.medscape.com/article/280245-treatment#d1" target="blank">https://emedicine.medscape.com/article/280245-treatment#d1</a></List.Item>
  </List>

  <Header size="medium" style={{marginTop: 60}}>News and Info Source:</Header>
  <List as='ul'>
    <List.Item as='li'><a href="https://pubmed.ncbi.nlm.nih.gov" target="blank">PubMed</a></List.Item>
    <List.Item as='li'><a href="https://health.detik.com" target="blank">Detik Health</a></List.Item>
  </List>

</Fragment>);

export default About;