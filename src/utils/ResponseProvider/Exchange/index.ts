import { CurrencyPairsActions, ICurrencyPair } from '../../../actions/CurrencyPairsAction'
import store from '../../../store'

export class Exchange {
    public static currencyPairs(data: ICurrencyPair[]): void {
        store.dispatch(CurrencyPairsActions.addCurrencyPair(data))
    }

    // public static summary(data: ISummary[]) {}
}

/*
class ExchangeStruct() {
    public CurrencyKeyPair currencyKeyPair;
    public int             amount;
    public int             totalAmount;

    ExchangeStruct(currencyKeyPair, amount, totalAmount){
         currencyKeyPair = currencyKeyPair;
         amount          = amount;
         totalAmount     = Util.doSome(totalAmount);
    }

    public object getXXXXX(){

    }

    public object getXXXXX(){

    }

    public object getXXXXX(currencyPair, action){
        return currencyPair.name === action.payload.name && currencyPair.pair === action.payload.pair
    }
}*/
