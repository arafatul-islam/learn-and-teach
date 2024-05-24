<?php

class BankAccount
{
	public $accountNumber;
	public $balance;

	public function deposit($amount)
	{
		if ($amount > 0) {
			$this->balance += $amount;
		}
		return $this;
	}

	public function withdraw($amount)
	{
		if ($amount <= $this->balance) {
			$this->balance -= $amount;
			return $this;
		}
                return false;

	}

}

$account1 = new BankAccount();
$balance = $account1->deposit(1000)->withdraw(500)->deposit(700)->balance;
echo $balance;