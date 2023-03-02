<template>
  <!-- <div id="app"> -->
    <!-- header -->
    <nav class="navbar navbar-dark navbar-expand-lg justify-content-around pt-3 fixed-top shadow">
      <!-- Brand/logo -->
      <a class="navbar-brand" href="#">
        <img src="./assets/img/white-logo-sidebyside.png" alt="logo" style="width:200px;"></a>
      <!-- Links -->
      <ul class="navbar-nav navbar-nav ms-auto flex-nowrap">
        <li class="nav-item"><a class="nav-link" href="#" style="color:#fff"> Why Funnelll</a></li>
        <li class="nav-item"><a class="nav-link" href="#">Integrations</a></li>
        <li class="nav-item"><a class="nav-link" href="#">Dashboards</a></li>
        <li class="nav-item"><a class="nav-link" href="#">Pricing</a></li>
        <li class="nav-item"><a class=" btn-main" href="#">Get Started Free</a></li>
        <li class="nav-item">
          <a class="nav-link" type="button" id="show-btn" @click="showModal = true" >Login</a>
           </li>
            <Login v-show="showModal" @close-modal="showModal = false" />
      </ul>
    </nav>
    <!-- <Login v-show="showModal" @close-modal="showModal = false" /> -->
    <!-- <Login v-show="showModal"/> -->
    

    <!-- first Section -->
    <section>
      <div class="row justify-content-center">
        <div class="col-lg-10 col-md-12 col-sm-12">
          <div class="text-center mt-5" style="color: white; line-height: 1.5;">
            <h1>
              Powerful Analytics,<br> <span class="text-green">Made Easy</span>
            </h1>
            <div style="margin-top: 15px;">
              <small>Get the most out of your marketing budget. No coding or complex dashboards needed!</small>
            </div>
            <div class="mt-4 row justify-content-center">
              <a class="btn btn-main me-2" href="#">Get Started Free</a>
              <a class="btn btn-secandary" href="#">Get Demo</a>
            </div>
            <div class="mt-3">
              <small>14 day free trial. No credit card needed</small>
            </div>
          </div>
        </div>
      </div>
      <div class="row justify-content-center mt-4">
        <div class="col-lg-10 text-center">
          <div class="videoWrapper">
            <iframe style="border-radius: 15px;" width="560px" height="315px"  src="https://www.youtube.com/embed/dEdbZ43R_p8?rel=0"
              title="Funnelll Intro" frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen></iframe>
          </div>
        </div>
      </div>
    </section>
    <!-- End Section #1 -->

    <!-- section #2 -->
    <section class="container text-center mt-4 pt-lg-1 pb-5 second-sec" >
      <h5 class="mt-5" > Over <strong>2,000</strong>
         Founders and Marketers get Better Results with Funnelll</h5>
      <div class="row justify-content-center">
        <div class="col-lg-3 col-md-4 col-sm-6 mt-4 mb-2">
          <img src="./assets/img/500Startupslogo.png" alt="500 Global" class="founder-log">
        </div>
        <div class="col-lg-3 col-md-4 col-sm-6 mt-4 mb-2">
          <img src="./assets/img/saasmantra.png" alt="SaaS Mantra" class="founder-log">
        </div>
        <div class="col-lg-3 col-md-4 col-sm-6 mt-4 mb-2">
          <img src="./assets/img/gameball.png" alt="Gameball" class="founder-log">
        </div>
        <div class="col-lg-3 col-md-4 col-sm-6 mt-4 mb-2">
          <img src="./assets/img/vivelo.png" alt="Vivelo" class="founder-log">
        </div>
        <div class="col-lg-3 col-md-4 col-sm-6 mt-4 mb-2">
          <img src="./assets/img/funding.png" alt="Funding Australia" class="founder-log">
        </div>
        <div class="col-lg-3 col-md-4 col-sm-6 mt-4 mb-2">
          <img src="./assets/img/daveparker.png" alt="Dave Parker" class="founder-log">
        </div>
        <div class="col-lg-3 col-md-4 col-sm-6 mt-4 mb-2">
          <img src="./assets/img/frozenlemon.png" alt="Frozen Lemon Agency" class="founder-log">
        </div>
        <div class="col-lg-3 col-md-4 col-sm-6 mt-4 mb-2">
          <img src="./assets/img/fundraisingforacause.png" alt="Fund Raising For A Cause" class="founder-log">
        </div>
      </div>
    </section>
    <!-- End Section #2 -->
    <!-- Section #3 -->
    <section class="container mt-5 mb-5">
      <div class="row align-items-center justify-content-center mt-5 text-center">
        <div class="col-lg-10 px-lg-5 mt-5">
          <h5 class="mt-2 mb-3">
            <span class="text-green">INSIGHTS AND DASHBOARDS</span></h5>
          <h2 style="font-size:calc(1.6rem + 1.5vw);">
            Get The Insights Your Business Needs</h2>
          <p class="mt-4 px-lg-5">
            Funnelll brings your data together, removes inconsistencies, and gives you the tools to maximize the ROI
            on your marketing budget</p>
        </div>
      </div>
    </section>
    <!-- End section #3 --> 
    <!-- Section #4 -->
    <section class="container mt-5 mb-5">
      <div class="row align-items-center mt-5">
        <div class="col-lg-5">
          <h5 class="mt-5"><span class="text-green">UNDERSTAND</span></h5>
          <h2 style="line-height: 1.3;">Ask questions in plain English, get answers and insights </h2>
          <p class="mt-4">
            Ask questions about your marketing performance in plain English with supporting data just a click away
            <br>&nbsp;<br>
            Funnelll answers questions about:
          </p>
          <ul>
            <li class="mb-1">Customer Journeys</li>
            <li class="mb-1">Channel and Campaign performance</li>
            <li class="mb-1">Location performance by Country and City</li>
          </ul>
        </div>
        <div class="col-lg-7"> 
          <img style="border-radius: 10px; max-width: -webkit-fill-available"
            class="mt-5 mt-lg-0 px-lg-5" src="./assets/img/answers.png" alt="Get Insights" loading="lazy">
        </div>
      </div>
    </section>
    <!-- End Section #4 -->
    <!--Section #5  -->
    <section class="container mt-5 mb-5">
      <div class="row align-items-center">
        <div class="col-lg-7 order-lg-1 order-md-1 order-sm-2 order-2">
          <img style="border-radius: 10px; max-width: -webkit-fill-available" class="mt-2" src="./assets/img/funnel.png"
            alt="Channel Performance" loading="lazy">
          <p></p>
        </div>
        <div class="col-lg-5 order-lg-2 order-md-2 order-sm-1 order-1 ps-lg-5">
          <h5 class="mt-5 mt-lg-0"><span class="text-green">BRING DATA TOGETHER</span></h5>
          <h2 style="line-height: 1.3;">
            Visualize Your Customers' Journeys on Your Website
          </h2>
          <p class="mt-4">
            Analyze users across a series of actions. See how many people start or finish a sequence — and where
            they drop off. Get access to data about:
          </p>
          <ul>
            <li class="mb-1">Device Performance across stages</li>
            <li class="mb-1">Page performance by stage</li>
            <li class="mb-1">Marketing Performance by stage</li>
          </ul>
          <small>And More...</small>
        </div>
      </div>
    </section>
    <!-- End Section #5-->
    <!-- Section #6 -->
    <section class="container mt-5 mb-5">
      <div class="row justify-content-center">
        <div class="col-lg-10 mb-5 text-center">
          <div class="ceo">
            <img src="https://www.funnelll.com/assets/img/site/Johannes.png" style="border-radius:50%; width: 100px;" alt="Johannes @ Leadsie"
              loading="lazy">
            <div class="mt-3"> Johannes Radig, CEO @ <a href="#" class="no-underline">
              <span style="color: #74c633;">Leadsie</span></a>
              <blockquote>
                <h2 style="font-weight: 300; line-height: 1.5">
                  It is amazing how easy Funnelll makes it to answer questions about my campaigns' performance
                  and how they drive customer actions on my website</h2>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End  Section #6 -->
    <!-- Section #7 -->
    <section class="container mt-5 mb-5">
      <div class="row justify-content-center mt-5 text-center" >
        <div class="col-lg-10 px-lg-5">
          <h5 class="mt-5"><span class="text-green">UNLOCK CUSTOMERS' DATA</span></h5>
          <h2 style="font-size:calc(1.6rem + 1.5vw);">
            Conversion Tracking Made Simple
          </h2>
          <p class="mt-4 px-lg-5">
            Track meaningful actions customers take on your website as they progress through their buying journey.
            Distribute high-quality data throughout your marketing stack</p>
        </div>
      </div>
    </section>
    <!-- End Section #7 -->
    <!-- Section #8  -->
    <section class="container mt-5 mb-5">
      <div class="row align-items-center mt-5">
        <div class="col-lg-5">
          <h5 class="mt-5 mt-lg-0"><span class="text-green">NO-CODE TRACKING</span></h5>
          <h2 style="line-height: 1.3;">Automatically Track Page Views, Clicks, and Scrolls or Set Up Your Custom Tracking Visually</h2>
          <p class="mt-4">Add the Funnelll code to your website to automatically track page views, clicks, and scrolls</p>
          <ul>
            <li class="mb-1">Works Cross-domains</li>
            <li class="mb-1">Single Page Application ready</li>
            <li class="mb-1">Automatically syncs data with Google Analytics</li>
          </ul>
        </div>
        <div class="col-lg-7">
          <img style="border-radius: 10px; max-width: -webkit-fill-available" class="mt-5 mt-lg-0"
            src="https://ucarecdn.com/67bbea6c-de76-4160-a4ae-207bfe7b0c3d/track-actions.png" alt="No-code tracking"
            loading="lazy">
        </div>
      </div>
    </section>
    <!-- End Section #8 -->
    <!-- Section #9 -->
    <section class="container mt-5 mb-5">
      <div class="row align-items-center" >
        <div class="col-lg-7 order-lg-1 order-md-1 order-sm-2 order-2">
          <img style="border-radius: 10px; max-width: 90%" class="mt-2" src="./assets/img/integrations.png"
            alt="Apps &amp; Integrations" loading="lazy">
          <p></p>
        </div>
        <div class="col-lg-5 order-lg-2  order-md-2 order-sm-1 order-1">
          <h5 class="mt-5 mt-lg-0"><span class="text-green">DISTRIBUTE DATA</span></h5>
          <h2 style="line-height: 1.3;">
            3 Clicks to Distribute Your Customers' Data And Events Across Your Marketing Stack
          </h2>
          <p class="mt-4">
            Set up once then copy your tracking across your marketing stack with 3 clicks. Send Events to:
          </p>
          <ul>
            <li class="mb-1">Facebook Pixel / Ads</li>
            <li class="mb-1">Google Ads</li>
            <li class="mb-1">Slack, Quora, Captera, and more ...</li>
          </ul>
        </div>
      </div>
    </section>
    <!-- End Section #9 -->
    <!-- Section #10 -->
    <section class="container mt-5 mb-5">
      <div class="row justify-content-center">
        <div class="col-lg-10 text-center">
          <div class="ceo">
            <img src="https://ucarecdn.com/8bf0e5b6-da0b-4a6d-92bb-f453b72b6235/jordan.png" style="border-radius:50%"
              alt="Jordan @ Burstware" loading="lazy">
            <div class="mt-3">
              Jordan B, CEO @ <a href="#" class="no-underline"><span style="color: #74c633;">Burstware</span></a>
              <blockquote>
                <h2 style="font-weight: 300; line-height: 1.5">Funnelll makes it dead simple to setup and track
                  your marketing funnel, I have not seen anything like it. I didn't have to dig through klunky
                  interfaces and keep track of multiple tags on my website</h2>
              </blockquote>
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End Section #10 -->
    <!-- Section #11 -->
    <section class="container mt-5 mb-5">
      <div class="row justify-content-center">
        <div class="col-lg-10 col-md-12 col-sm-12">
          <div class="text-center mt-5">
            <h1>Say Goodbye to wasted marketing budgets</h1>

            <div style="margin-top: 35px; margin-bottom: 25px;">
              <div class="row justify-content-center">
                <div class="col-lg-3">
                  <img src="https://www.funnelll.com/static/img/icons/checked--acid.svg" alt="✓" class="check-circle">
                  Measure what matters
                </div>
                <div class="col-lg-3">
                  <img src="https://www.funnelll.com/static/img/icons/checked--acid.svg" alt="✓" class="check-circle">
                  Visualize customer journeys
                </div>
                <div class="col-lg-3">
                  <img src="https://www.funnelll.com/static/img/icons/checked--acid.svg" alt="✓" class="check-circle">
                  Answer your questions
                </div>
              </div>
            </div>
            <div class="mt-5 row justify-content-center">
              <a class="btn btn-main me-2" href="#">Get Started Free</a>
              <a class="btn btn-secandary" href="#">Get Demo</a>
            </div>
            <div class="mt-3">
              <small>14 day free trial. No credit card needed.</small>
            </div>
          </div>
        </div>
      </div>
    </section>
     <!-- End Section #11 -->
    <!-- Section #12 -->
    <section class="container mt-5 mb-5">
      <div class="row justify-content-center">
        <div class="col-lg-4 text-center mt-5">
          <div
            style="padding:3%; color: #fff; position: relative; overflow: hidden;background: linear-gradient(261.71deg, #485a63 13.92%, #2c3c44 84.19%);border-radius: 10px;">
            <img src="https://ucarecdn.com/8bc9ed9d-0bf7-410d-b312-d7ac4822e638/greg.png" style="border-radius:50%"
              alt="Greg @ Shuttlefare" loading="lazy">
            <div class="mt-3">
              Greg B, CEO @ <a href="https://www.shuttlefare.com/" target="_blank" class="no-underline"><span
                  style="color: #74c633;">SHUTTLEFARE</span></a>
              <blockquote>
                <h5>Making conversion tracking simple</h5>
              </blockquote>
              <p>
              </p>
              <blockquote>
                <h4 style="font-weight: 300;">
                  I like the ease of setting up conversion goals. The dashboard and analytics look great</h4>
              </blockquote>
              <p></p>
            </div>
          </div>
        </div>
        <div class="col-lg-4 text-center mt-lg-2 mt-5">
          <div
            style="padding:3%; color: #fff; position: relative; overflow: hidden;background: linear-gradient(261.71deg, #485a63 13.92%, #2c3c44 84.19%);border-radius: 10px;">
            <img src="https://ucarecdn.com/e7637696-989f-4f88-9514-0654cec256f3/square-ysl6hps.png"
              style="border-radius:50%" alt="Philip" loading="lazy">
            <div class="mt-3">
              Philip S, Founder
              <blockquote>
                <h5>Great way to collect everything</h5>
              </blockquote>
              <p>
              </p>
              <blockquote>
                <h4 style="font-weight: 300;">
                  When you do run different marketing campaigns and you want to create an overview of all your
                  campaigns in one place, then Funnelll is an awesome software
                </h4>
              </blockquote>
              <p></p>
            </div>
          </div>
        </div>
        <div class="col-lg-4 text-center mt-5">
          <div
            style="padding:3%; color: #fff; position: relative; overflow: hidden;background: linear-gradient(261.71deg, #485a63 13.92%, #2c3c44 84.19%);border-radius: 10px;">
            <img src="https://ucarecdn.com/1350f56b-81bc-4401-8b8a-cdf8a6d81204/carlos-ubaldo-profile-picture.png"
              style="border-radius:50%" alt="Carlos" loading="lazy">
            <div class="mt-3">
              Carlos U, Founder @ Ablaze Digital
              <blockquote>
                <h5>Great Tracking Integration Platform</h5>
              </blockquote>
              <p>
              </p>
              <blockquote>
                <h4 style="font-weight: 300;">
                  If you are into conversion tracking. This tool is going to save you a lot of time
                </h4>
              </blockquote>
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </section>
     <!-- End Section #12 -->
    <!-- Footer -->
    <footer class="container pt-5 pb-5" >
        <div class="row">
          <div class="col-lg-3 pe-4">
            <img src="./assets/img/logo-icon.png" alt="Funnelll" loading="lazy">
            <img src="./assets/img/logo-text.png" alt="Funnelll" loading="lazy">
            <p class="mt-4"> We are on a mission to make digital marketing accessible for anyone bold enough to start
              <small>Funnelll is a proud <b>500 Global</b>, <b>Flat6Labs</b>, and <b>Pioneer</b> company</small> </p>
            <p><small>© Copyright Funnelll</small></p>
            <p><small> Funnelll Inc. <br>
                251 Little Falls Drive, Wilmington, New Castle County, Delaware 19808, US</small></p>
          </div>
          <div class="col-lg-2">
            <h5>Apps &amp; Integrations</h5>
            <div class="mt-4"><small> <a href="#" class="text-green no-underline">Google Analytics</a></small> </div>
            <div class="mt-3"><small><a href="#" class="text-green no-underline">Facebook Pixel &amp; Ads</a> </small></div>
            <div class="mt-3"><small><a href="#" class="text-green no-underline">Google Ads</a> </small> </div>
            <div class="mt-3"><small> <a href="#" class="text-green no-underline">Google Search Console</a></small></div>
            <div class="mt-3"><small> <a href="#" class="text-green no-underline">Slack</a> </small></div>
            <div class="mt-3"><small><a href="#" class="text-green no-underline">Quora Ads</a> </small> </div>
            <div class="mt-3"><small><a href="#" class="text-green no-underline">Capterra PPC</a> </small></div>
            <div class="mt-3"><small> <a href="#" class="text-green no-underline">View All &gt;&gt;</a></small></div> 
          </div>
          <div class="col-lg-2"><h5>Platforms</h5>
            <div class="mt-4"><small><a href="#" class="text-green no-underline">Shopify</a></small></div>
            <div class="mt-3"><small><a href="#" class="text-green no-underline">WordPress</a></small> </div>
            <div class="mt-3"><small><a href="#" class="text-green no-underline">ClickFunnels</a></small></div>
            <div class="mt-3"><small> <a href="#" class="text-green no-underline">Squarespace</a></small></div>
            <div class="mt-3"><small><a href="#" class="text-green no-underline">Weblium</a></small></div>
            <div class="mt-3"><small><a href="#" class="text-green no-underline">Weebly</a></small> </div>
            <div class="mt-3"><small><a href="#" class="text-green no-underline">Wix</a></small> </div>
            <div class="mt-3"> <small><a href="#" class="text-green no-underline">WooCommerce</a></small></div>
          </div>
          <div class="col-lg-2">
            <h5>Company</h5>
            <div class="mt-4"><small><a href="#" class="text-green no-underline">About Us</a> </small></div>
            <div class="mt-3"><small><a href="#" class="text-green no-underline">Jobs @Funnelll</a></small></div>
            <div class="mt-3"><small><a href="#" class="text-green no-underline">Blog</a></small></div>
            <div class="mt-3"><small><a href="#" class="text-green no-underline">Help Portal</a></small></div>
            <div class="mt-3"><small><a href="#" class="text-green no-underline">Road-map</a></small></div>
            <h5 class="mt-4">Policies</h5>
            <div class="mt-4"><small><a href="" class="text-green no-underline">Privacy Policy</a></small></div>
            <div class="mt-3"><small><a href="#" class="text-green no-underline">Terms &amp; Conditions</a> </small></div></div>
          <div class="col-lg-3 text-center mt-4 mt-lg-0">
            <a href="#" rel="noopener">
              <img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=177607&amp;theme=light"
                alt="Funnelll - Run marketing campaigns that work. Improve ROI by 10X. | Product Hunt Embed"
                style="width: 250px; height: 54px;" width="250px" height="54px"></a>
            <div class="mt-4">
              <h5>For partnership enquiries contact</h5>
              <a href="mailto:partnerships@funnelll.com" class="text-green no-underline">partnerships@funnelll.com</a>
            </div>
            <div class="mt-5 ps-5 ms-4">
              <img src="./assets/img/safe.png" >
            </div>
          </div>
        </div> 
    </footer>
  <!-- </div> -->
</template>

<script>
import Login from './components/Login.vue'

export default {
  components: { Login },
  data() {
    return {
      showModal: false,
    }
  },
}
</script> 

<style scoped>
nav {
  background-color: #263238;
  border-bottom-width: 2px;
}

section {
  margin-bottom: 3rem !important;
  margin-top: 3rem !important;
}

h1 {
  font-size: calc(3.5rem + 1.5vw);
  color: white;
  line-height: 1.5;
}
footer{
  margin-bottom: 0;
  max-width: 100%;
    padding: 10%;
    background-color: #000; 
    color: #fff;
    font-size: .875em;
}
.nav-link {
  padding: 1rem !important;
}</style>
