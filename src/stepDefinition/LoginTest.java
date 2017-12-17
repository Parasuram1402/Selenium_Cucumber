package stepDefinition;

import java.util.NoSuchElementException;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginTest {

	WebDriver driver;
	
	@Given("^Open Mercury URL$")
	public void open_Mercury_URL() throws Throwable {
		System.setProperty("webdriver.chrome.driver", "F:\\chromedriver\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.get("http://newtours.demoaut.com");
		Thread.sleep(3000);		
	}

	@When("^I Give Valid Credentials$")
	public void i_Give_Valid_Credentials() throws Throwable {
		driver.findElement(By.name("userName")).sendKeys("mercury");
		driver.findElement(By.name("password")).sendKeys("mercury");

	}

	@When("^Click Sign_In$")
	public void click_Sign_In() throws Throwable {
		driver.findElement(By.name("login")).click();

	}

	@Then("^I Validate Flight Finder$")
	public void i_Validate_Flight_Finder() throws Throwable {
		try {
			driver.findElement(By.xpath("//td/table/tbody/tr/td[2]/table/tbody/tr/td/img"));
			System.out.println("Success");
		} catch (NoSuchElementException e) {
			System.out.println("Failure");   
			driver.close();
		}
		
		
//   
	}
	
	
}
