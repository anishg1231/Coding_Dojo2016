require_relative 'bank_account'

RSpec.describe BankAccount do
  user1 = BankAccount.new
  it "has a checking_account_balance method to give checking account balance" do
    expect(user1.checking_account_balance).to eq("Your Checking Account Balance $ 5000")
  end

  it "has a saving account balance method to give saving account balance " do
    expect(user1.saving_account_balance).to eq("Your Saving Account Balance $ 0")
  end

  it "has a deposit method" do
    expect(user1.deposit(500, 'savings')).to eq(500)
    expect(user1.deposit(1000, 'checking')). to eq(6000)
  end

  it "has a withdraw method" do
    expect(user1.withdraw(500,'savings')).to eq("Sorry, you have insufficent funds")
    expect(user1.withdraw(500, 'checking')).to eq(5500)
  end

  it "has a bank total method" do
    expect(user1.bank_total). to eq(6000)
  end
end
