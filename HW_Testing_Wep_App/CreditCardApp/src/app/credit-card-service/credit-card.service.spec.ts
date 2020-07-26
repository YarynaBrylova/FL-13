import { TestBed } from '@angular/core/testing';

import { CreditCardService } from './credit-card.service';

describe('CreditCardService', () => {
  let service: CreditCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreditCardService);
  });

  it('should create CreditCardService', async () => {
    expect(service).toBeTruthy();
  });

  //valid format
  it('should return Credit card number is in invalid format', async () => {
    const result = service.testCreditCard('2014 0000 0000 b09', 'enRoute');
    expect(result.message).toEqual('Credit card number is in invalid format');
  })

  it('should return Credit card number is in invalid format', async () => {
    const result = service.testCreditCard('', 'Visa');
    expect(result.message).toEqual('Credit card number is in invalid format');
  })

  //isModuleTenDigitsValid
  it ('should return Credit card number is invalid', async () => {
    const result = service.testCreditCard('5500 0000 0000 0000', 'MasterCard');
    expect(result.message).toEqual('Credit card number is invalid');
  })

  it ('should return Credit card number is invalid', async () => {
    const result = service.testCreditCard('5500 0000 0000 0006', 'MasterCard');
    expect(result.message).toEqual('Credit card number is invalid');
  })

  it ('should return Credit card number is invalid', async () => {
    const result = service.testCreditCard('6334 0000 0000 0005', 'Solo');
    expect(result.message).toEqual('Credit card number is invalid');
  })

  //isCardNumberPrefixVlid
  it ('should return Credit card number is invalid', async () => {
    const result = service.testCreditCard('7111 1111 1111 1111', 'Visa');
    expect(result.message).toEqual('Credit card number is invalid');
  })

  it ('should return Credit card number is invalid', async () => {
    const result = service.testCreditCard('6012 0000 0000 0004', 'Discover');
    expect(result.message).toEqual('Credit card number is invalid');
  })


  //scam number
  it ('should return Warning! This credit card number is associated with a scam attempt', async () => {
    const result = service.testCreditCard('5490997771092064', 'MasterCard');
    expect(result.message).toEqual('Warning! This credit card number is associated with a scam attempt');
  })

  //length
  it ('should return Credit card number has an inappropriate number of digits', async () => {
    const result = service.testCreditCard('5500 0000 0000 0 0004', 'MasterCard');
    expect(result.message).toEqual('Credit card number has an inappropriate number of digits');
  })

  it ('should return Credit card number has an inappropriate number of digits', async () => {
    const result = service.testCreditCard('6304 100 0000 008', 'LaserCard');
    expect(result.message).toEqual('Credit card number has an inappropriate number of digits');
  })

})
