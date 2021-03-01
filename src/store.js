import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' 
import { routerMiddleware } from 'connected-react-router'
import rootSaga from './saga'
import rootReducer from './reducer'
import history from './history'

const storeConfig = {
    key: 'rootPersistMovie',
    storage,
    blacklist: ["router", "movieContainsSearchTerm", "movieDetail", "login"]
  }

const rootReducerPersist = persistReducer(storeConfig, rootReducer(history))

const configStore = () => {
    const sagaMiddleware = createSagaMiddleware()
    
    const store = createStore(
        rootReducerPersist,
        composeWithDevTools(
            applyMiddleware(
                sagaMiddleware, 
                routerMiddleware(history)
                )
          )
        )
    sagaMiddleware.run(rootSaga)
    let persistor = persistStore(store)
    return { store, persistor, history}
}

export default configStore