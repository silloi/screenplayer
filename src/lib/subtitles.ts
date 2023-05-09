export type SubtitlesJson = {
	duration: number;
	language: string;
	segments: Segment[];
	task: string;
	text: string;
};

export type Segment = {
	avg_logprob: number;
	compression_ratio: number;
	end: number;
	id: number;
	no_speech_prob: number;
	seek: number;
	start: number;
	temperature: number;
	text: string;
	tokens: number[];
	transient: boolean;
};

export const subtitlesJson: SubtitlesJson = {
	duration: 156.9,
	language: 'english',
	segments: [
		{
			avg_logprob: -0.3222198241796249,
			compression_ratio: 1.3888888888888888,
			end: 19.36,
			id: 0,
			no_speech_prob: 0.5713746547698975,
			seek: 0,
			start: 10.0,
			temperature: 0.0,
			text: ' Four score and seven years ago, our fathers brought forth on this continent a new nation,',
			tokens: [
				7451, 6175, 293, 3407, 924, 2057, 11, 527, 23450, 3038, 5220, 322, 341, 18932, 257, 777,
				4790, 11
			],
			transient: false
		},
		{
			avg_logprob: -0.3222198241796249,
			compression_ratio: 1.3888888888888888,
			end: 28.560000000000002,
			id: 1,
			no_speech_prob: 0.5713746547698975,
			seek: 0,
			start: 19.36,
			temperature: 0.0,
			text: ' conceived in liberty and dedicated to the proposition that all men are created equal.',
			tokens: [34898, 294, 22849, 293, 8374, 281, 264, 24830, 300, 439, 1706, 366, 2942, 2681, 13],
			transient: false
		},
		{
			avg_logprob: -0.17573434915115585,
			compression_ratio: 1.6521739130434783,
			end: 37.879999999999995,
			id: 2,
			no_speech_prob: 6.86824059812352e-5,
			seek: 2856,
			start: 28.56,
			temperature: 0.0,
			text: ' Now we are engaged in a great civil war, testing whether that nation, or any nation so conceived',
			tokens: [
				823, 321, 366, 8237, 294, 257, 869, 5605, 1516, 11, 4997, 1968, 300, 4790, 11, 420, 604,
				4790, 370, 34898
			],
			transient: false
		},
		{
			avg_logprob: -0.17573434915115585,
			compression_ratio: 1.6521739130434783,
			end: 43.96,
			id: 3,
			no_speech_prob: 6.86824059812352e-5,
			seek: 2856,
			start: 37.879999999999995,
			temperature: 0.0,
			text: ' and so dedicated, can long endure.',
			tokens: [293, 370, 8374, 11, 393, 938, 24732, 13],
			transient: false
		},
		{
			avg_logprob: -0.17573434915115585,
			compression_ratio: 1.6521739130434783,
			end: 48.96,
			id: 4,
			no_speech_prob: 6.86824059812352e-5,
			seek: 2856,
			start: 43.96,
			temperature: 0.0,
			text: ' We are met on a great battlefield of that war.',
			tokens: [492, 366, 1131, 322, 257, 869, 21818, 295, 300, 1516, 13],
			transient: false
		},
		{
			avg_logprob: -0.17573434915115585,
			compression_ratio: 1.6521739130434783,
			end: 55.099999999999994,
			id: 5,
			no_speech_prob: 6.86824059812352e-5,
			seek: 2856,
			start: 48.96,
			temperature: 0.0,
			text: ' We have come to dedicate a portion of that field as a final resting place for those who',
			tokens: [
				492, 362, 808, 281, 30718, 257, 8044, 295, 300, 2519, 382, 257, 2572, 21221, 1081, 337, 729,
				567
			],
			transient: false
		},
		{
			avg_logprob: -0.2951571499859845,
			compression_ratio: 1.5413533834586466,
			end: 60.28,
			id: 6,
			no_speech_prob: 0.00019021434127353132,
			seek: 5510,
			start: 55.1,
			temperature: 0.0,
			text: ' here gave their lives that that nation might live.',
			tokens: [510, 2729, 641, 2909, 300, 300, 4790, 1062, 1621, 13],
			transient: false
		},
		{
			avg_logprob: -0.2951571499859845,
			compression_ratio: 1.5413533834586466,
			end: 67.0,
			id: 7,
			no_speech_prob: 0.00019021434127353132,
			seek: 5510,
			start: 60.28,
			temperature: 0.0,
			text: ' It is altogether fitting and proper that we should do this.',
			tokens: [467, 307, 19051, 15669, 293, 2296, 300, 321, 820, 360, 341, 13],
			transient: false
		},
		{
			avg_logprob: -0.2951571499859845,
			compression_ratio: 1.5413533834586466,
			end: 76.6,
			id: 8,
			no_speech_prob: 0.00019021434127353132,
			seek: 5510,
			start: 67.0,
			temperature: 0.0,
			text: ' But in a larger sense, we cannot dedicate, we cannot consecrate, we cannot hallow this',
			tokens: [
				583, 294, 257, 4833, 2020, 11, 321, 2644, 30718, 11, 321, 2644, 40526, 4404, 11, 321, 2644,
				324, 1202, 341
			],
			transient: false
		},
		{
			avg_logprob: -0.2951571499859845,
			compression_ratio: 1.5413533834586466,
			end: 78.72,
			id: 9,
			no_speech_prob: 0.00019021434127353132,
			seek: 5510,
			start: 76.6,
			temperature: 0.0,
			text: ' ground.',
			tokens: [2727, 13],
			transient: false
		},
		{
			avg_logprob: -0.23157875878470285,
			compression_ratio: 1.5566502463054188,
			end: 86.4,
			id: 10,
			no_speech_prob: 9.261092054657638e-5,
			seek: 7872,
			start: 78.72,
			temperature: 0.0,
			text: ' The brave men, living and dead, who struggled here have consecrated it, far above our poor',
			tokens: [
				440, 12653, 1706, 11, 2647, 293, 3116, 11, 567, 19023, 510, 362, 40526, 5468, 309, 11, 1400,
				3673, 527, 4716
			],
			transient: false
		},
		{
			avg_logprob: -0.23157875878470285,
			compression_ratio: 1.5566502463054188,
			end: 90.94,
			id: 11,
			no_speech_prob: 9.261092054657638e-5,
			seek: 7872,
			start: 86.4,
			temperature: 0.0,
			text: ' power to add or detract.',
			tokens: [1347, 281, 909, 420, 1141, 1897, 13],
			transient: false
		},
		{
			avg_logprob: -0.23157875878470285,
			compression_ratio: 1.5566502463054188,
			end: 97.58,
			id: 12,
			no_speech_prob: 9.261092054657638e-5,
			seek: 7872,
			start: 90.94,
			temperature: 0.0,
			text: ' The world will little note, nor long remember what we say here, but it can never forget',
			tokens: [
				440, 1002, 486, 707, 3637, 11, 6051, 938, 1604, 437, 321, 584, 510, 11, 457, 309, 393, 1128,
				2870
			],
			transient: false
		},
		{
			avg_logprob: -0.23157875878470285,
			compression_ratio: 1.5566502463054188,
			end: 100.32,
			id: 13,
			no_speech_prob: 9.261092054657638e-5,
			seek: 7872,
			start: 97.58,
			temperature: 0.0,
			text: ' what they did here.',
			tokens: [437, 436, 630, 510, 13],
			transient: false
		},
		{
			avg_logprob: -0.23157875878470285,
			compression_ratio: 1.5566502463054188,
			end: 107.7,
			id: 14,
			no_speech_prob: 9.261092054657638e-5,
			seek: 7872,
			start: 100.32,
			temperature: 0.0,
			text: ' It is for us, the living, rather, to be dedicated here to the unfinished work which they who',
			tokens: [
				467, 307, 337, 505, 11, 264, 2647, 11, 2831, 11, 281, 312, 8374, 510, 281, 264, 41037, 589,
				597, 436, 567
			],
			transient: false
		},
		{
			avg_logprob: -0.23758534022739955,
			compression_ratio: 1.6180904522613064,
			end: 112.62,
			id: 15,
			no_speech_prob: 8.877805521478876e-5,
			seek: 10770,
			start: 107.7,
			temperature: 0.0,
			text: ' fought here have thus far so nobly advanced.',
			tokens: [11391, 510, 362, 8807, 1400, 370, 572, 25021, 7339, 13],
			transient: false
		},
		{
			avg_logprob: -0.23758534022739955,
			compression_ratio: 1.6180904522613064,
			end: 119.88,
			id: 16,
			no_speech_prob: 8.877805521478876e-5,
			seek: 10770,
			start: 112.62,
			temperature: 0.0,
			text: ' It is rather for us to be here dedicated to the great task remaining before us, that from',
			tokens: [
				467, 307, 2831, 337, 505, 281, 312, 510, 8374, 281, 264, 869, 5633, 8877, 949, 505, 11, 300,
				490
			],
			transient: false
		},
		{
			avg_logprob: -0.23758534022739955,
			compression_ratio: 1.6180904522613064,
			end: 126.32000000000001,
			id: 17,
			no_speech_prob: 8.877805521478876e-5,
			seek: 10770,
			start: 119.88,
			temperature: 0.0,
			text: ' these honored dead we take increased devotion to that cause for which they gave the last',
			tokens: [
				613, 14556, 3116, 321, 747, 6505, 30671, 281, 300, 3082, 337, 597, 436, 2729, 264, 1036
			],
			transient: false
		},
		{
			avg_logprob: -0.23758534022739955,
			compression_ratio: 1.6180904522613064,
			end: 129.78,
			id: 18,
			no_speech_prob: 8.877805521478876e-5,
			seek: 10770,
			start: 126.32000000000001,
			temperature: 0.0,
			text: ' full measure of devotion.',
			tokens: [1577, 3481, 295, 30671, 13],
			transient: false
		},
		{
			avg_logprob: -0.23758534022739955,
			compression_ratio: 1.6180904522613064,
			end: 136.7,
			id: 19,
			no_speech_prob: 8.877805521478876e-5,
			seek: 10770,
			start: 129.78,
			temperature: 0.0,
			text: ' That we here highly resolve that these dead shall not have died in vain.',
			tokens: [663, 321, 510, 5405, 14151, 300, 613, 3116, 4393, 406, 362, 4539, 294, 22240, 13],
			transient: false
		},
		{
			avg_logprob: -0.2061558203263716,
			compression_ratio: 1.396551724137931,
			end: 142.67999999999998,
			id: 20,
			no_speech_prob: 0.0003136156883556396,
			seek: 13670,
			start: 136.7,
			temperature: 0.0,
			text: ' That this nation, under God, shall have a new birth of freedom.',
			tokens: [663, 341, 4790, 11, 833, 1265, 11, 4393, 362, 257, 777, 3965, 295, 5645, 13],
			transient: false
		},
		{
			avg_logprob: -0.2061558203263716,
			compression_ratio: 1.396551724137931,
			end: 150.56,
			id: 21,
			no_speech_prob: 0.0003136156883556396,
			seek: 13670,
			start: 142.67999999999998,
			temperature: 0.0,
			text: ' And that government of the people, by the people, for the people, shall not perish from',
			tokens: [
				400, 300, 2463, 295, 264, 561, 11, 538, 264, 561, 11, 337, 264, 561, 11, 4393, 406, 41586,
				490
			],
			transient: false
		},
		{
			avg_logprob: -0.7957903544108073,
			compression_ratio: 0.5555555555555556,
			end: 169.56,
			id: 22,
			no_speech_prob: 0.0003336460795253515,
			seek: 15056,
			start: 150.56,
			temperature: 0.0,
			text: ' the earth.',
			tokens: [50364, 264, 4120, 13, 51314],
			transient: false
		}
	],
	task: 'transcribe',
	text: 'Four score and seven years ago, our fathers brought forth on this continent a new nation, conceived in liberty and dedicated to the proposition that all men are created equal. Now we are engaged in a great civil war, testing whether that nation, or any nation so conceived and so dedicated, can long endure. We are met on a great battlefield of that war. We have come to dedicate a portion of that field as a final resting place for those who here gave their lives that that nation might live. It is altogether fitting and proper that we should do this. But in a larger sense, we cannot dedicate, we cannot consecrate, we cannot hallow this ground. The brave men, living and dead, who struggled here have consecrated it, far above our poor power to add or detract. The world will little note, nor long remember what we say here, but it can never forget what they did here. It is for us, the living, rather, to be dedicated here to the unfinished work which they who fought here have thus far so nobly advanced. It is rather for us to be here dedicated to the great task remaining before us, that from these honored dead we take increased devotion to that cause for which they gave the last full measure of devotion. That we here highly resolve that these dead shall not have died in vain. That this nation, under God, shall have a new birth of freedom. And that government of the people, by the people, for the people, shall not perish from the earth.'
};

export const subtitles = `WEBVTT

00:00:09.000 --> 00:00:19.360
Four score and seven years ago

00:00:09.000 --> 00:00:13.800
our fathers brought forth on this continent a new nation,

00:00:13.800 --> 00:00:21.000
conceived in liberty,

00:00:20.800 --> 00:00:23.800
and dedicated to the proposition

00:00:23.800 --> 00:00:28.560
and dedicated to the proposition that all men are created equal.

00:00:28.560 --> 00:00:32.800
Now we are engaged in a great civil war,

00:00:32.800 --> 00:00:35.500
testing whether that nation,

00:00:35.500 --> 00:00:40.000
or any nation so conceived and so dedicated, 

00:00:40.000 --> 00:00:43.960
can long endure.

00:00:43.960 --> 00:00:48.960
We are met on a great battlefield of that war.

00:00:48.960 --> 00:00:52.100
We have come to dedicate a portion of that field,

00:00:52.100 --> 00:00:55.000
as a final resting place for those

00:00:55.000 --> 00:00:57.280
who here gave their lives

00:00:57.280 --> 00:01:00.280
that that nation might live.

00:01:00.280 --> 00:01:04.000
It is altogether fitting and proper

00:01:04.000 --> 00:01:07.000
that we should do this.

00:01:07.000 --> 00:01:09.400
But in a larger sense,

00:01:09.400 --> 00:01:11.000
we cannot dedicate,

00:01:11.000 --> 00:01:14.600
we cannot consecrate,

00:01:14.600 --> 00:01:18.720
we cannot hallow this ground.

00:01:18.720 --> 00:01:21.800
The brave men, living and dead,

00:01:21.800 --> 00:01:25.800
who struggled here have consecrated it,

00:01:25.800 --> 00:01:30.940
far above our poor power to add or detract.

00:01:30.940 --> 00:01:32.580
The world will little note,

00:01:32.580 --> 00:01:36.000
nor long remember what we say here,

00:01:32.580 --> 00:01:40.320
but it can never forget what they did here.

00:01:40.320 --> 00:01:45.000
It is for us, the living, rather, to be dedicated here

00:01:45.000 --> 00:01:48.500
to the unfinished work which they who fought here

00:01:48.500 --> 00:01:52.620
have thus far so nobly advanced.

00:01:52.620 --> 00:01:55.500
It is rather for us to be here dedicated

00:01:55.500 --> 00:01:59.260
to the great task remaining before us,

00:01:59.260 --> 00:02:02:800
that from these honored dead we take increased

00:02:02:800 --> 00:02:05.800
devotion to that cause for which they gave

00:02:05.800 --> 00:02:09.780
the last full measure of devotion.

00:02:09.780 --> 00:02:12.500
That we here highly resolve that these dead

00:02:12.500 --> 00:02:19.700
shall not have died in vain.

00:02:16.700 --> 00:02:19.500
That this nation, under God,

00:02:19.500 --> 00:02:22.480
shall have a new birth of freedom.

00:02:22.480 --> 00:02:25.200
And that government of the people,

00:02:25.200 --> 00:02:27.000
by the people,

00:02:27.000 --> 00:02:28.800
for the people,

00:02:28.800 --> 00:02:33.000
shall not perish from the earth.

`;
