<template>
  <div class="poka cards" :class="{ellipsis: hideOverflow}">
    <slot/>
  </div>
</template>

<script>
export default {
  name: "poka-cards",
  props: {
    hideOverflow: {
      type: Boolean,
      default: true
    }
  }
};
</script>
<style lang="sass">
.md-theme-default-dark 
	.poka.cards
		--text-color: #FFF
.poka.cards
	--text-color: #000
	display: flex
	flex-wrap: wrap
	max-width: 100%
	width: 100%
	.card
		--size: calc(16.6% - 1em)
		height: 0
		width: var(--size)
		font-size: 10px
		margin: .4em .5em
		background-position: center
		background-size: cover
		padding-bottom: var(--size)
		padding: .475em .5em
		display: block
		height: auto
		padding-bottom: 0
		text-decoration: none
		position: relative

.poka.cards .card[data-source]:before
	content: attr(data-source)
	position: absolute
	color: #FFF
	display: block
	position: absolute
	text-align: right
	right: 10px
	z-index: 1
	top: 11px
	background-color: rgba(0, 0, 0, 0.4)
	padding: 2px 3px
	border-radius: 4px
	font-size: 12px
	max-width: 7em
	white-space: nowrap
	overflow: hidden
	text-overflow: ellipsis
	transition: all .2s
	will-change: transform

.poka
	&.cards.ellipsis .card
		.title,.subtitle
			overflow: hidden
			text-overflow: ellipsis
			white-space: nowrap
.poka
	&.cards .card
		&[data-source]:hover:before
			transform: translateY(-5px)
		.image
			height: 0
			padding-bottom: 100%
			background-size: cover
			border-radius: .8em
			box-shadow: 0 5px 10px #0000002e
			transition: all .2s
			will-change: box-shadow, transform
			position: relative
		&:hover .image
			transform: translateY(-5px)
			box-shadow: 0 10px 15px #0000004d
		.image i
			margin: auto
			display: block
			top: 0
			right: 0
			bottom: 0
			left: 0
			position: absolute
			transform: scale(2)
			color: #FFF
		.title
			font-size: 1.8em
			padding-top: 5px
			line-height: 1.5em
			font-weight: bold
			color: var(--text-color)
			opacity: .9
		.subtitle
			font-size: 1.2em
			padding-top: 0px
			line-height: 1.5em
			color: var(--text-color)
			opacity: .75
		.image
			background-color: #F44336
		&:nth-child(14n+2) .image
			background-color: #E91E63
		&:nth-child(14n+3) .image
			background-color: #9C27B0
		&:nth-child(14n+4) .image
			background-color: #673AB7
		&:nth-child(14n+5) .image
			background-color: #3F51B5
		&:nth-child(14n+6) .image
			background-color: #2196F3
		&:nth-child(14n+7) .image
			background-color: #00BCD4
		&:nth-child(14n+8) .image
			background-color: #009688
		&:nth-child(14n+9) .image
			background-color: #4CAF50
		&:nth-child(14n+10) .image
			background-color: #8BC34A
		&:nth-child(14n+11) .image
			background-color: #CDDC39
		&:nth-child(14n+12) .image
			background-color: #FF5722
		&:nth-child(14n+13) .image
			background-color: #795548
		&:nth-child(14n+14) .image
			background-color: #9E9E9E
	&.two.cards .card
		--size: calc(100% / 2 - 1em)
	&.three.cards .card
		--size: calc(100% / 3 - 1em)
	&.four.cards .card
		--size: calc(100% / 4 - 1em)
	&.five.cards .card
		--size: calc(100% / 5 - 1em)
	&.six.cards .card
		--size: calc(100% / 6 - 1em)
	&.sever.cards .card
		--size: calc(100% / 7 - 1em)
	&.eight.cards .card
		--size: calc(100% / 8 - 1em)
	&.nine.cards .card
		--size: calc(100% / 9 - 1em)
	&.ten.cards .card
		--size: calc(100% / 10 - 1em)

@media (max-width: 380px)
	.poka
		&.cards .card
			--size: calc(100% - 1em)
			font-size: 9px
		&.doubling.four.cards .card
			--size: calc(100% - 1em)
@media (max-width: 575.98px)
	.poka
		&.cards .card
			--size: calc(50% - 1em)
			font-size: 9px
		&.doubling.four.cards .card
			--size: calc(50% - 1em)

@media (min-width: 576px) and (max-width: 767.98px)
	.poka.cards .card
		--size: calc(33.3% - 1em)
		.image i
			font-size: 5em

@media (min-width: 768px) and (max-width: 991.98px)
	.poka.cards .card
		--size: calc(25% - 1em)

@media (min-width: 992px) and (max-width: 1199.98px)
	.poka.cards .card
		--size: calc(20% - 1em)

@media (min-width: 1200px)
	.poka.cards .card
		--size: calc(16.6% - 1em)

@media (max-width: 575.98px)
	.poka
		&.doubling.ten.cards .card
	 		--size: calc(20% - 1em)
		&.color.picker.cards > .card
		  	--size: calc(20%)
</style>