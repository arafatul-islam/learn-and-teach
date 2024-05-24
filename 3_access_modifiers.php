<?php

class Person
{
    private $name;

    public function getName()
    {
        return $this->name;
    }

    public function setName($name){
        $this->name = $name;
    }
}

$person1 = new Person();
$person1->setName('Arafat');
echo $person1->getName();

class Customer
{
	private $name;
	public function setName($name)
	{
		$name = trim($name);

		if ($name == '') {
			return false;
		}
		$this->name = $name;
            return true;
	}

	public function getName()
	{
		return $this->name;
	}
}

$customer = new Customer();

$customer->setName(' x  ');
echo $customer->getName();