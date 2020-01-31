<script>
export default {
  watch: {
    $route (to, from) {
      if (
        to.path !== from.path &&
        this.$el.querySelector('#carbonads')
      ) {
        this.$el.innerHTML = ''
        this.load()
      }
    }
  },
  mounted () {
    this.load()
    document.addEventListener('visibilitychange', () => {
      if (!document.hidden) {
        this.$el.innerHTML = ''
        this.load()
      }
    })
  },

  methods: {
    load () {
      const id =
        process.env.NODE_ENV === 'development'
          ? 'CVAIKKQM&placement=carbonadsnet'
          : 'CE7DEKQM&placement=masscodeio'
      const s = document.createElement('script')
      s.id = '_carbonads_js'
      s.src = `//cdn.carbonads.com/carbon.js?serve=${id}`
      this.$el.appendChild(s)
    }
  },

  render (h) {
    return h('div', { class: 'carbon' })
  }
}
</script>

<style>
.carbon {
  padding: 1.5rem 1.5rem 0;
  min-height: 102px;
  margin-bottom: -20px;
}
#carbonads > span {
  position: relative;
  display: block;
  border-radius: 4px;
  background-color: #fff;
}

.carbon-wrap {
  display: flex;
}

.carbon-img {
  margin-right: 10px;
  line-height: 1;
}

.carbon-text {
  color: #637381;
  text-decoration: none;
  font-size: 12px;
}

.carbon-poweredby {
  position: absolute;
  bottom: 10px;
  left: 165px;
  color: #c5cdd0;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: .5px;
  font-weight: 500;
  font-size: 8px;
  line-height: 1;
}
</style>
