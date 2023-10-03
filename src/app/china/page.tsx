"use client"
import '@/Styles/style.css'

export default function Home() {


    return (
        <div>


            <main role="main">
 
 

 




            <section className="ui-section-pricing">
        <div className="ui-layout-container">
          
          <p className="ui-text-intro">Custom Orders from Alibaba and AliExpress: Your Wish, Our Command.</p>
          
          <div className="ui-section-pricing__layout ui-layout-grid ui-layout-grid-2">
            <div className="ui-component-card ui-component-card--pricing">
              <span><strong>Order By Sea</strong></span>
              
              <div className="ui-component-card--pricing-price">
                 
                <span>Pricing: 20% of the total order</span> <br/>
                <span>Delivery Time: 45-60 Days</span> <br/>
              </div> 
               
 
               
              <a href="https://wa.me/96171568667" target='_blank' className="ui-component-button ui-component-button-big ui-component-button-secondary" role="link" aria-label="#">Get Started</a>
            </div>
            <div className="ui-component-card ui-component-card--pricing">
              <span><strong>Order By Air</strong></span>
              
              <div className="ui-component-card--pricing-price"> 
                <span>Pricing: $20/KG</span><br/>
                <span>Delivery Time: 21 Days</span> <br/>
              </div>  

              <a href="https://wa.me/96171568667" target='_blank' className="ui-component-button ui-component-button-big ui-component-button-secondary" role="link" aria-label="#">Get Started</a>
            </div>
             
          </div>
        </div>
      </section>







            </main>


        </div>
    )
}
