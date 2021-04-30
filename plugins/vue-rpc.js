import Vue from 'vue'
import JRPCWS from 'vue-json-rpc-websocket'


export default ({ $config: { wsUrl } }) => {
  Vue.use(JRPCWS, wsUrl, {
    reconnectEnabled: true,
    reconnectInterval: 5000,
    reconnectAttempts: 3
  })
}
