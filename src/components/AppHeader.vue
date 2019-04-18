<template>
  <div id="header">
  	<shortcut-bar/>
  	<search-area/>
  </div>
</template>

<script>
	import ShortcutBar from '@/components/ShortcutBar'
	import SearchArea from '@/components/SearchArea'

	export default {
	  name: 'AppHeader',
	  components: {
	  	'shortcut-bar': ShortcutBar,
	  	'search-area': SearchArea,
	  },
	  data () {
	    return {}
	  },
	};
</script>

<style scoped>
	#header {
		width: 100%;
		height: 120px;
	}
</style>