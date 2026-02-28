  <!DOCTYPE html>
  <html lang="en-US">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>Remap - Privacy Policy</title>
      <meta name="description" content="Remap Privacy Policy">
  
  
    <?php include 'header.php'; ?>
	
	
	<style>
		
		
		.request-portfolio {text-align:center;margin:40px auto 80px auto;}
		
		
	
		/* Portfolio Section - Client Stories */
		.portfolio {
		    background: #f8f6f1;
		}

		.stories-grid {
		    display: grid;
		    grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
		    gap: 30px;
		    margin-top: 60px;
		}

		.story-card {
		    padding: 35px;
		    border: 1px solid #EBE2D9;
		    border-radius: 12px;
		    background: #FEFDFA;
		    transition: transform 0.2s ease, box-shadow 0.2s ease;
		}

		.story-card:hover {
		    transform: translateY(-2px);
		    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
		}
		
		
		
		.story-card .story-meta {
		    opacity: .7;
		}
		.story-card:hover .story-meta {
		    opacity: 1;
		}

		.client-info {
		    margin-bottom: 20px;
		}

		.client-name {
		    font-size: 18px;
		    font-weight: 500;
		    color: #333;
		    margin-bottom: 8px;
		}

		.end-client {
		    font-size: 14px;
		    color: #666;
		}

		.story-meta {
		    display: flex;
		    flex-wrap: wrap;
		    gap: 8px;
		    margin-bottom: 20px;
		}

		.meta-tag {
		    padding: 4px 12px;
		    border-radius: 12px;
		    font-size: 12px;
		    font-weight: 500;
		}

		.role-tag {
		    background: #4883a3;
		    color: white;
		}

		.tech-tag {
		    background: #82c09a;
		    color: white;
		}

		.industry-tag {
		    background: #333;
		    color: white;
		}

		.story-headline {
		    font-size: 16px;
		    color: #333;
		    margin-bottom: 25px;
		    font-style: italic;
		    line-height: 24px;
		}

		.read-story-btn {
		    background-color: #f7c326;
		    color: #333;
		    padding: 10px 24px;
		    border-radius: 25px;
		    text-decoration: none;
		    font-size: 14px;
		    font-weight: 500;
		    display: inline-block;
		    transition: all 0.2s ease;
		}

		.read-story-btn:hover {
		    background-color: #e6af24;
		    transform: translateY(-1px);
		}


		
	</style>
	
	
	
	<!-- Main Content -->
    <main>
		
		<!-- Hero -->
		<div class="section hero">
			<div class="section-inner">
				<h1>Remap Privacy policy</h1>
				<h3>Privacy policy for Remap Holdings LLC</h3>
			</div>
		</div>

		<!-- Policy -->
		<div class="section privacy-policy">
			<div class="section-inner">
				
				<div class="narrow-paragraph">
				
					<p>At Remap, we do not collect personal information or data of any kind through forms or direct input. However, our website uses tracking technologies, specifically Google and Meta cookie-dropping "pixels", to help us understand website traffic and potentially improve our advertising.</p> 
					
					<p>The Google and Meta tracking cookies  may be used to create Remap "retargeting ads"; thus, if you accept these cookies, you may see such ads from Remap based on your visit to this site. Your information is anonymized and we don't share it with third party advertisers or information merchants.</p>
					
					<p>These technologies (Google and Meta pixels) may collect information about your visit in accordance with their own privacy policies. We respect your privacy and comply with the General Data Protection Regulation (GDPR). You may opt out of non-essential cookies and tracking at any time by adjusting your cookie preferences on this page.</p>
				

					
					<div style="text-align:center;display:flex">	
						<div class="button-wrapper"><button onclick="setConsent(true)" class="primary-button" style="margin-right:10px">Accept tracking cookies</button></div>
						<div class="button-wrapper"><button onclick="setConsent(false)" class="primary-button" style="margin-left:10px">Decline tracking cookies</button></div>
				
					</div>
				
				</div>
				
				
			</div>
		</div>


	
    </main>
	
	
<?php include 'footer.php'; ?>