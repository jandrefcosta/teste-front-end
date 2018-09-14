import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

const videoSearch = [{
	"kind": "youtube#searchResult",
	"etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/RLOGPOWMrcSASLkOXWNqJqA_c6I\"",
	"id": {
		"kind": "youtube#video",
		"videoId": "kJQP7kiw5Fk"
	},
	"snippet": {
		"publishedAt": "2017-01-13T05:00:02.000Z",
		"channelId": "UCLp8RBhQHu9wSsq62j_Md6A",
		"title": "Luis Fonsi - Despacito ft. Daddy Yankee",
		"description": "Despacito” disponible ya en todas las plataformas digitales: https://UMLE.lnk.to/DOoUzFp Sigue a Luis Fonsi: Official Site: http://www.luisfonsi.com/ Facebook: ...",
		"thumbnails": {
			"default": {
				"url": "https://i.ytimg.com/vi/kJQP7kiw5Fk/default.jpg",
				"width": 120,
				"height": 90
			},
			"medium": {
				"url": "https://i.ytimg.com/vi/kJQP7kiw5Fk/mqdefault.jpg",
				"width": 320,
				"height": 180
			},
			"high": {
				"url": "https://i.ytimg.com/vi/kJQP7kiw5Fk/hqdefault.jpg",
				"width": 480,
				"height": 360
			}
		},
		"channelTitle": "LuisFonsiVEVO",
		"liveBroadcastContent": "none"
	}
}];

const videoDetails = [{
	"kind": "youtube#videoListResponse",
	"etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/NET7iP1RX1a5_TKlu13ZFQ6oXP8\"",
	"pageInfo": {
		"totalResults": 1,
		"resultsPerPage": 1
	},
	"items": [{
		"kind": "youtube#video",
		"etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/iTKKG-FOsA3SM9CivEhb6oALbgQ\"",
		"id": "9bZkp7q19f0",
		"snippet": {
			"publishedAt": "2012-07-15T07:46:32.000Z",
			"channelId": "UCrDkAvwZum-UTjHmzDI2iIw",
			"title": "PSY - GANGNAM STYLE(강남스타일) M/V",
			"description": "PSY - ‘I LUV IT’ M/V @ https://youtu.be/Xvjnoagk6GU\nPSY - ‘New Face’ M/V @https://youtu.be/OwJPPaEyqhI\n\nPSY - 8TH ALBUM '4X2=8' on iTunes @\nhttps://smarturl.it/PSY_8thAlbum\n\nPSY - GANGNAM STYLE(강남스타일) on iTunes @ http://smarturl.it/PsyGangnam\n\n#PSY #싸이 #GANGNAMSTYLE #강남스타일\n\nMore about PSY@\nhttp://www.psypark.com/\nhttp://www.youtube.com/officialpsy\nhttp://www.facebook.com/officialpsy\nhttp://twitter.com/psy_oppa\nhttps://www.instagram.com/42psy42\nhttp://iTunes.com/PSY\nhttp://sptfy.com/PSY\nhttp://weibo.com/psyoppa\nhttp://twitter.com/ygent_official",
			"thumbnails": {
				"default": {
					"url": "https://i.ytimg.com/vi/9bZkp7q19f0/default.jpg",
					"width": 120,
					"height": 90
				},
				"medium": {
					"url": "https://i.ytimg.com/vi/9bZkp7q19f0/mqdefault.jpg",
					"width": 320,
					"height": 180
				},
				"high": {
					"url": "https://i.ytimg.com/vi/9bZkp7q19f0/hqdefault.jpg",
					"width": 480,
					"height": 360
				},
				"standard": {
					"url": "https://i.ytimg.com/vi/9bZkp7q19f0/sddefault.jpg",
					"width": 640,
					"height": 480
				},
				"maxres": {
					"url": "https://i.ytimg.com/vi/9bZkp7q19f0/maxresdefault.jpg",
					"width": 1280,
					"height": 720
				}
			},
			"channelTitle": "officialpsy",
			"tags": [
				"PSY",
				"싸이",
				"강남스타일",
				"뮤직비디오",
				"Music Video",
				"Gangnam Style",
				"KOREAN SINGER",
				"KPOP",
				"KOERAN WAVE",
				"PSY 6甲",
				"6th Studio Album",
				"싸이6집",
				"육갑",
				"YG Family",
				"YG Entertainment"
			],
			"categoryId": "10",
			"liveBroadcastContent": "none",
			"localized": {
				"title": "PSY - GANGNAM STYLE(강남스타일) M/V",
				"description": "PSY - ‘I LUV IT’ M/V @ https://youtu.be/Xvjnoagk6GU\nPSY - ‘New Face’ M/V @https://youtu.be/OwJPPaEyqhI\n\nPSY - 8TH ALBUM '4X2=8' on iTunes @\nhttps://smarturl.it/PSY_8thAlbum\n\nPSY - GANGNAM STYLE(강남스타일) on iTunes @ http://smarturl.it/PsyGangnam\n\n#PSY #싸이 #GANGNAMSTYLE #강남스타일\n\nMore about PSY@\nhttp://www.psypark.com/\nhttp://www.youtube.com/officialpsy\nhttp://www.facebook.com/officialpsy\nhttp://twitter.com/psy_oppa\nhttps://www.instagram.com/42psy42\nhttp://iTunes.com/PSY\nhttp://sptfy.com/PSY\nhttp://weibo.com/psyoppa\nhttp://twitter.com/ygent_official"
			}
		},
		"statistics": {
			"viewCount": "3210274559",
			"likeCount": "14807223",
			"dislikeCount": "2092912",
			"favoriteCount": "0",
			"commentCount": "5255295"
		},
		"player": {
			"embedHtml": "\u003ciframe width=\"480\" height=\"270\" src=\"//www.youtube.com/embed/9bZkp7q19f0\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen\u003e\u003c/iframe\u003e"
		}
	}]
}]

