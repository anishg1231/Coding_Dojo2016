class BankAccount
  attr_accessor :account_number,:checking_account_balance, :saving_account_balance,:total_amount

  def initialize
    @total_amount = 0
    @checking_account_balance = 5000
    @saving_account_balance = 0
  end

  def checking_account_balance
    "Your Checking Account Balance $ #{@checking_account_balance}"
  end

  def saving_account_balance
    "Your Saving Account Balance $ #{@saving_account_balance}"
  end

  def deposit(amount, account)
    if account == "savings"
      "Deposit Savings"
      @saving_account_balance = @saving_account_balance + amount
    else
      "Deposit Checking"
      @checking_account_balance += amount
    end
  end
  def withdraw(amount, account)
    if account == "savings"
      if amount < @saving_account_balance
        @saving_account_balance -= amount
      else
        "Sorry, you have insufficent funds"
      end
    else
      if amount < @checking_account_balance
        @checking_account_balance -= amount
      else
        "Sorry, you have insufficent funds"
      end
    end
  end

  def bank_total
    @total_amount = @saving_account_balance + @checking_account_balance
  end

  def account_information
    "Your Account Number is: #{@account_number}"
    "Your Checking Account Balance: #{@checking_account_balance}"
    "Your Saving Account Balance: #{@saving_account_balance}"
    "Your Bank Total: #{@total_amount}"
  end

  # private
  def create_account
    @account_number = rand.to_s[2..10]
    "Your account number #{@account_number}"
    self
  end
end
# user1 = BankAccount.new
# user1.create_account
# user1.checking_account_balance
# user1.saving_account_balance
# puts user1.deposit(500, "savings")
# user1.saving_account_balance
# # user1.deposit(1000, "Checking")
# # user1.checking_account_balance
# # user1.withdraw(4000, "savings")
# # user1.saving_account_balance
# # user1.bank_total
# # user1.count_accounts
# user1.account_information
