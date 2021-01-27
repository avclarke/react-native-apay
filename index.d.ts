export type APayAllowedCardNetworkType =
  | 'amex'
  | 'mastercard'
  | 'visa'
  | 'privatelabel'
  | 'chinaunionpay'
  | 'interac'
  | 'jcb'
  | 'suica'
  | 'cartebancaires'
  | 'idcredit'
  | 'quicpay'
  | 'maestro'

export type APayPaymentStatusType = number

export interface APayPaymentSummaryItemType {
  label: string
  amount: string
}

export interface APayRequestDataType {
  merchantIdentifier: string
  supportedNetworks: APayAllowedCardNetworkType[]
  countryCode: string
  currencyCode: string
  paymentSummaryItems: APayPaymentSummaryItemType[]
}

export type APayPaymentObject = {
  billingAddress: Record<string, any>
  token: {
    paymentData: Record<string, any>
    paymentMethod: {
      network: 'Visa' | 'Mastercard'
      type: 'debit' | 'credit'
      displayName: string
    }
  }
}

declare class ApplePay {
  static SUCCESS: APayPaymentStatusType
  static FAILURE: APayPaymentStatusType
  static canMakePayments: boolean
  static requestPayment: (
    requestData: APayRequestDataType
  ) => Promise<APayPaymentObject>
  static complete: (status: APayPaymentStatusType) => Promise<void>
}

export { ApplePay }
