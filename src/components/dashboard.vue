<template>
	<el-row  :gutter="20">
		<el-col :span="6">
			<div class="xe-widget xe-counter" style="height: 94px;">
				<div class="xe-icon">
					<i class="ivu-icon-arrow-graph-up-right"></i>
				</div>
				<div class="xe-label">
					<strong class="num">0.0%</strong>
					<span>Server uptime</span>
				</div>
			</div>
		</el-col>
		<el-col :span="6">
			<div class="xe-widget xe-counter xe-counter-blue" style="height: 94px;">
				<div class="xe-icon">
					<i class="ivu-icon-connection-bars"></i>
				</div>
				<div class="xe-label">
					<strong class="num">1k</strong>
					<span>Users Total</span>
				</div>
			</div>
		</el-col>
		<el-col :span="6">
			<div class="xe-widget xe-counter xe-counter-info" style="height: 94px;">
				<div class="xe-icon">
					<i class="ivu-icon-laptop"></i>
				</div>
				<div class="xe-label">
					<strong class="num">1000</strong>
					<span>New Daily Photos</span>
				</div>
			</div>
		</el-col>

		<el-col :span="6">

			<div class="xe-widget xe-counter xe-counter-red" style="height: 94px;">
				<div class="xe-icon">
					<i class="ivu-icon-cube"></i>
				</div>
				<div class="xe-label">
					<strong class="num">-,0%</strong>
					<span>Exchange Commission</span>
				</div>
			</div>

		</el-col>

		<el-col :span="6">

			<div class="xe-widget xe-counter-block" style="height: 150px;">
				<div class="xe-upper">

					<div class="xe-icon">
						<i class="ivu-icon-android-contacts"></i>
					</div>
					<div class="xe-label">
						<strong class="num">0.0%</strong>
						<span>Server uptime</span>
					</div>

				</div>
				<div class="xe-lower">
					<div class="border"></div>

					<span>Result</span>
					<strong>78% Increase</strong>
				</div>
			</div>

		</el-col>

		<el-col :span="6">

			<div class="xe-widget xe-counter-block xe-counter-block-purple" style="height: 150px;">
				<div class="xe-upper">

					<div class="xe-icon">
						<i class="ivu-icon-android-warning"></i>
					</div>
					<div class="xe-label">
						<strong class="num">0</strong>
						<span>Photos Taken</span>
					</div>

				</div>
				<div class="xe-lower">
					<div class="border"></div>

					<span>Increase</span>
					<strong>512 more photos</strong>
				</div>
			</div>

		</el-col>

		<el-col :span="6">

			<div class="xe-widget xe-counter-block xe-counter-block-blue" style="height: 150px;">
				<div class="xe-upper">

					<div class="xe-icon">
						<i class="ivu-icon-social-html5"></i>
					</div>
					<div class="xe-label">
						<strong class="num">0k</strong>
						<span>Daily Visits</span>
					</div>

				</div>
				<div class="xe-lower">
					<div class="border"></div>

					<span>Bounce Rate</span>
					<strong>51.55%</strong>
				</div>
			</div>

		</el-col>

		<el-col :span="6">

			<div class="xe-widget xe-counter-block xe-counter-block-orange" style="height: 150px;">
				<div class="xe-upper">

					<div class="xe-icon">
						<i class="ivu-icon-android-drafts"></i>
					</div>
					<div class="xe-label">
						<strong class="num">24/7</strong>
						<span>Live Support</span>
					</div>

				</div>
				<div class="xe-lower">
					<div class="border"></div>

					<span>Tickets Opened</span>
					<strong data-count="this" data-from="0" data-to="14215" data-duration="2">0</strong>
				</div>
			</div>

		</el-col>

		<el-col :span="6">

			<div class="xe-widget xe-progress-counter xe-progress-counter-pink" style="height: 150px;">

				<div class="xe-background">
					<i class="ivu-icon-android-clipboard"></i>
				</div>

				<div class="xe-upper">
					<div class="xe-icon">
						<i class="ivu-icon-android-folder-open"></i>
					</div>
					<div class="xe-label">
						<span>likes</span>
						<strong class="num">0</strong>
					</div>
				</div>

				<div class="xe-progress">
					<span class="xe-progress-fill" data-fill-from="0" data-fill-to="56" data-fill-unit="%" data-fill-property="width" data-fill-duration="2" data-fill-easing="true"></span>
				</div>

				<div class="xe-lower">
					<span>Likes p/ Month</span>
					<strong>41% more likes</strong>
				</div>

			</div>
			<div class="xe-widget xe-progress-counter xe-progress-counter-turquoise" style="height: 150px;">

				<div class="xe-background">
					<i class="ivu-icon-android-car"></i>
				</div>

				<div class="xe-upper">
					<div class="xe-icon">
						<i class="ivu-icon-android-boat"></i>
					</div>
					<div class="xe-label">
						<span>chat lines</span>
						<strong class="num">0</strong>
					</div>
				</div>

				<div class="xe-progress">
					<span class="xe-progress-fill" data-fill-from="0" data-fill-to="82" data-fill-unit="%" data-fill-property="width" data-fill-duration="3" data-fill-easing="true"></span>
				</div>

				<div class="xe-lower">
					<span>Chat lines p/ Month</span>
					<strong>82% more communication</strong>
				</div>

			</div>
			<!-- Todo list -->

		</el-col>

		<el-col :span="6">

			<!-- Tweets -->
			<div class="xe-widget xe-status-update" style="height: 320px;">
				<div class="xe-header">
					<div class="xe-icon">
						<i class="ivu-icon-android-plane"></i>
					</div>
					<div class="xe-nav">
						<a href="#" class="xe-prev">
							<i class="fa-angle-left"></i>
						</a>
						<a href="#" class="xe-next">
							<i class="fa-angle-right"></i>
						</a>
					</div>
				</div>
				<div class="xe-body">

					<ul class="list-unstyled">
						<li class="active">
							<span class="status-date">21 May</span>
							<p>Build your own Fake Twiost nowtter Post now! Check it out @ simitost nowator.com #laborator #envato</p>
						</li>
						<li>
							<span class="status-date">18 April</span>
							<p> Micro-finance clean water sustainable future Oxfam protect. Enabler meaningful work change-makers.</p>
						</li>
						<li>
							<span class="status-date">08 March</span>
							<p>Fight against malnutrition Aga Khan Bloomberg, economic independence inspire breakthroughs benefit civil.</p>
						</li>
					</ul>

				</div>
				<div class="xe-footer">
					<a href="#">
						<i class="fa-retweet"></i> Retweet
					</a>
				</div>
			</div>

		</el-col>

		<el-col :span="6">

			<div class="xe-widget xe-vertical-counter xe-vertical-counter-primary" style="height: 320px;">
				<div class="xe-icon">
					<i class="ivu-icon-android-bar"></i>
				</div>

				<div class="xe-label">
					<strong class="num">0,0%</strong>
					<span>Video Views</span>
				</div>
			</div>

		</el-col>

		<el-col :span="6">

			<div class="xe-widget xe-vertical-counter xe-vertical-counter-danger" style="height: 320px;">
				<div class="xe-icon">
					<i class="ivu-icon-android-time"></i>
				</div>

				<div class="xe-label">
					<strong class="num">0,0%</strong>
					<span>Document Downloads</span>
				</div>
			</div>

		</el-col>

		<el-col :span="6">

			<div class="xe-widget xe-counter-block xe-counter-block-red" style="height: 150px;">
				<div class="xe-upper">

					<div class="xe-icon">
						<i class="ivu-icon-android-pin"></i>
					</div>
					<div class="xe-label">
						<strong class="num">0.0%</strong>
						<span>Server uptime</span>
					</div>

				</div>
				<div class="xe-lower">
					<div class="border"></div>

					<span>Result</span>
					<strong>78% Increase</strong>
				</div>
			</div>

			<div class="xe-widget xe-counter-block xe-counter-block-yellow" style="height: 150px;">
				<div class="xe-upper">

					<div class="xe-icon">
						<i class="ivu-icon-social-twitter"></i>
					</div>
					<div class="xe-label">
						<strong class="num">0</strong>
						<span>Photos Taken</span>
					</div>

				</div>
				<div class="xe-lower">
					<div class="border"></div>

					<span>Increase</span>
					<strong>512 more photos</strong>
				</div>
			</div>

		</el-col>

		<el-col :span="6">

			<div class="xe-widget xe-status-update xe-status-update-facebook" style="height: 320px;">
				<div class="xe-header">
					<div class="xe-icon">
						<i class="ivu-icon-android-sunny"></i>
					</div>
					<div class="xe-nav">
					</div>
				</div>
				<div class="xe-body">

					<ul class="list-unstyled">
						<li>
							<span class="status-date">21 May</span>
							<p>Build your own Fake Twitter Post now! Check it out @ simitator.com #laborator #envato</p>
						</li>
						<li class="active">
							<span class="status-date">18 April</span>
							<p> Micro-finance clean water sustainable future Oxfam protect. Enabler meaningful work change-makers.</p>
						</li>
						<li>
							<span class="status-date">08 March</span>
							<p>Fight against malnutrition Aga Khan Bloomberg, economic independence inspire breakthroughs benefit civil.</p>
						</li>
					</ul>

				</div>
				<div class="xe-footer">
					<a href="#">
						<i class="linecons-megaphone"></i> Share This
					</a>
				</div>
			</div>

		</el-col>

		<el-col :span="6">

			<div class="xe-widget xe-status-update xe-status-update-google-plus" style="height: 320px;">
				<div class="xe-header">
					<div class="xe-icon">
						<i class="ivu-icon-social-google"></i>
					</div>
					<div class="xe-nav">
						<a href="#" class="xe-prev">
							<i class="fa-angle-left"></i>
						</a>
						<a href="#" class="xe-next">
							<i class="fa-angle-right"></i>
						</a>
					</div>
				</div>
				<div class="xe-body">

					<ul class="list-unstyled">
						<li class="active">
							<span class="status-date">21 May</span>
							<p>Build your own Fake Twitter Post now! Check it out @ simitator.com #laborator #envato</p>
						</li>
						<li>
							<span class="status-date">18 April</span>
							<p> Micro-finance clean water sustainable future Oxfam protect. Enabler meaningful work change-makers.</p>
						</li>
						<li>
							<span class="status-date">08 March</span>
							<p>Fight against malnutrition Aga Khan Bloomberg, economic independence inspire breakthroughs benefit civil.</p>
						</li>
					</ul>

				</div>
				<div class="xe-footer">
					<a href="#">
						<i class="linecons-thumbs-up"></i> +1 this post
					</a>
				</div>
			</div>

		</el-col>

		<el-col :span="6">

			<div class="xe-widget xe-status-update xe-counter-block" style="height: 320px;">
				<div class="xe-header">
					<div class="xe-icon">
						<i class="fa-facebook"></i>
					</div>
					<div class="xe-nav">
					</div>
				</div>
				<div class="xe-body">

					<ul class="list-unstyled">
						<li>
							<span class="status-date">21 May</span>
							<p>Build your own Fake Twitter Post now! Check it out @ simitator.com #laborator #envato</p>
						</li>
						<li class="active">
							<span class="status-date">18 April</span>
							<p> Micro-finance clean water sustainable future Oxfam protect. Enabler meaningful work change-makers.</p>
						</li>
						<li>
							<span class="status-date">08 March</span>
							<p>Fight against malnutrition Aga Khan Bloomberg, economic independence inspire breakthroughs benefit civil.</p>
						</li>
					</ul>

				</div>
				<div class="xe-footer">
					<a href="#">
						<i class="linecons-megaphone"></i> Share This
					</a>
				</div>
			</div>

		</el-col>
	</el-row>
</template>
<script>
	export default {
		data: function() {
			return {}
		},
		computed: {},
		methods: {}
	}
</script>
<style></style>