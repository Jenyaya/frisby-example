var frisby = require('frisby');

frisby.create('See error')
  .get('https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=e_udjin')
  .expectStatus(400)

.expectJSON({
	errors: [{
		message: 'Bad Authentication data',
		code :215
		}]
}
)

.toss();