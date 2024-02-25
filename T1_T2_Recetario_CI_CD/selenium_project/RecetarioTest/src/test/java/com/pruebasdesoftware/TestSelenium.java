package com.pruebasdesoftware;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;

import java.util.List;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class TestSelenium {
	
	
	private WebDriver driver;
	
	@Before
	//	Inicializar WebDriver
	public void setUp() {
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		
		// Si se ejecuta el frontend en ambiente de desarrollo
		driver.get("http://localhost:4200/");
		
		// Si se ejecuta el frontend en ambiente de produccion (binarios hosteados por Apache en XAMPP)
		// driver.get("http://127.0.0.2:80/");
	}
	
	@Test
	// Crear receta y mostrar receta creada
	public void test_01() {
		driver.findElement(By.xpath("/html/body/app-root/app-navbar/nav/div/ul/li[2]/a")).click();
		WebElement name = driver.findElement(By.name("name"));
		name.clear();
		name.sendKeys("Receta Selenium");
		WebElement image = driver.findElement(By.name("image"));
		image.clear();
		image.sendKeys("data:image/png;base64,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");
		WebElement ingredients = driver.findElement(By.name("ingredients"));
		ingredients.clear();
		ingredients.sendKeys("1. Selenium.\n2. Java.\n3. VSC.");
		WebElement instructions = driver.findElement(By.name("instructions"));
		instructions.clear();
		instructions.sendKeys("1. Crear code.\n2. Testear");
		driver.findElement(By.xpath("//*[@id=\"submit\"]")).click();
		try {
			Thread.sleep(1000);
		}catch (InterruptedException e) {
			e.printStackTrace();
		}	
		assertTrue(driver.findElement(By.xpath("//*[@id=\"swal2-html-container\"]")).getText().contains("Se ha ingresado"));
		try {
			Thread.sleep(1000);
		}catch (InterruptedException e) {
			e.printStackTrace();
		}
		driver.findElement(By.xpath("/html/body/div/div/div[6]/button[1]")).click();
		try {
			Thread.sleep(5000);
		}catch (InterruptedException e) {
			e.printStackTrace();
		}
		assertTrue(driver.findElement(By.xpath("/html/body/app-root/div/app-list/div/div[2]/div[4]/div/div/h5")).getText().contains("Receta Selenium"));
	}
	
	@Test
	// Actualizar ultima receta
	public void test_02() {
		try {
			Thread.sleep(1000);
		}catch (InterruptedException e) {
			e.printStackTrace();
		}	
		driver.findElement(By.xpath("/html/body/app-root/div/app-list/div/div[2]/div[4]/div/div/div/button[2]")).click();
		assertTrue(driver.findElement(By.xpath("/html/body/app-root/div/app-create-update/div/div[1]/h1")).getText().contains("Actualizar receta"));
		WebElement name = driver.findElement(By.name("name"));
		name.clear();
		name.sendKeys("Receta Selenium 2");
		WebElement image = driver.findElement(By.name("image"));
		image.clear();
		image.sendKeys("data:image/png;base64,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");
		WebElement ingredients = driver.findElement(By.name("ingredients"));
		ingredients.clear();
		ingredients.sendKeys("1. Selenium 2.\n2. Java 2.\n3. VSC 2.");
		WebElement instructions = driver.findElement(By.name("instructions"));
		instructions.clear();
		instructions.sendKeys("1. Crear code 2.\n2. Testear 2");
		driver.findElement(By.xpath("//*[@id=\"submit\"]")).click();
		try {
			Thread.sleep(1000);
		}catch (InterruptedException e) {
			e.printStackTrace();
		}
		assertTrue(driver.findElement(By.xpath("//*[@id=\"swal2-html-container\"]")).getText().contains("Se ha actualizado"));
		try {
			Thread.sleep(1000);
		}catch (InterruptedException e) {
			e.printStackTrace();
		}
		driver.findElement(By.xpath("/html/body/div/div/div[6]/button[1]")).click();
		try {
			Thread.sleep(5000);
		}catch (InterruptedException e) {
			e.printStackTrace();
		}
		assertTrue(driver.findElement(By.xpath("/html/body/app-root/div/app-list/div/div[2]/div[4]/div/div/h5")).getText().contains("Receta Selenium 2"));
		
	}
	
	
	@Test
	// Ver recetas creadas
	public void test_03() {
		try {
			Thread.sleep(1000);
		}catch (InterruptedException e) {
			e.printStackTrace();
		}	
		List<WebElement> recipes = driver.findElements(By.xpath("/html/body/app-root/div/app-list/div/div[2]/div"));
		assertEquals(4, recipes.size());
	}

	@Test
	// Ver ultima receta
	public void test_04() {
		try {
			Thread.sleep(1000);
		}catch (InterruptedException e) {
			e.printStackTrace();
		}	
		driver.findElement(By.xpath("/html/body/app-root/div/app-list/div/div[2]/div[4]/div/div/div/button[1]")).click();
		assertTrue(driver.findElement(By.xpath("/html/body/app-root/div/app-get/div/div[1]/h1")).getText().contains("Ver receta"));
	}
	
	@Test
	// Eliminar ultima receta
	public void test_05() {
		try {
			Thread.sleep(1000);
		}catch (InterruptedException e) {
			e.printStackTrace();
		}	
		driver.findElement(By.xpath("/html/body/app-root/div/app-list/div/div[2]/div[4]/div/div/div/button[3]")).click();
		driver.findElement(By.xpath("/html/body/div/div/div[6]/button[1]")).click();
		
		try {
			Thread.sleep(1000);
		}catch (InterruptedException e) {
			e.printStackTrace();
		}	
		List<WebElement> recipes = driver.findElements(By.xpath("/html/body/app-root/div/app-list/div/div[2]/div"));
		assertEquals(3, recipes.size());
	}
	
	@After
	public void tearDown() {
		driver.quit();
	}
}
