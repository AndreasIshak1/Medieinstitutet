HTMLInlämningsuppgift #1
(1)      Beskriv varför behöverman "attributes" in en html-kod.
Svar: Attributes används för att ge mer information till elements. Olika attributes används på olika sätt. 
T.ex skapa länkar, ändra färg & massa andra saker som font, storlek etc. 
Utan Attributes går det inte att skapa en modern komplett hemsida.

(2)Gerett exempel på en "Opening" och "Closing" element.
<p><p>  <h1></h1> <section> </section> <div></div> <html></html> etc etc.

(3)Skapa ett stycke med texten "Hello Word!" inuti.
<p>Hello World!</p>

(4)      Skriv html-koden som kan reproducera följande layout:
<hr>
<h1><strong>Heading</strong><i> 1</i></h1>
<hr>
(5)      Skriv en hyper textlänk som pekar på Google sökmotor:https://www.google.com/webhp
<a href="https://www.google.com/webhp">Google</a>
(6)      Skriv html-koden för en ordnad lista med 3 artiklar.
<ol>
    <li>hej</li>
    <li>san</li>
    <li>svejsan</li>
</ol>
(7)      Närmåste  vi  använda  artikelelementet  (article)  istället  för  avsnittselementet  (section).Förklara varför.
Vi använder oss utav sektion du vi vill ungefär markera ett ämne och vart det ska ligga på hemsidan medans en article
ska användas till något specifikt på en hemsida.
(8)      Skriv html-koden för tvåkapslade/nested listor.Den första lis§§ta måste varanumereradoch den andraonumererad.
<ol>
    <li>Order</li>
    <li>List</li>
      <ul>
        <li>Unordered</li>
        <li>List</li>
      </ul>
  </ol>
(9)      Beskriv hur kan man validera en html-kod.
svar: Vi validerar koden genom att gå in på https://validator.w3.org/ och sedan laddar upp filen. Därefter ändrar vi koden baserat på vad den vill att vi ändrar.

(10)    Skriv en html-kod som ger följande resultat när den öppnas med en webbläsare.Skicka-knappen  ska  skicka  all  data  till  servern  https://httpbin.org  med  rätt  metod  för  detta  for-mulär.
<form action="https://httpbin.org/post" method="post">
    <fieldset>
        <legend>Student Info</legend>

        <fieldset>
            <legend>Personal Info</legend><br>

            <label for="firstName">First Name:</label>
            <input 
            type="text" 
            name="firstName" 
            id="firstName"
            required>
            <br><br>

            <label for="lastName">Last Name:</label>
            <input 
                type="text" 
                name="lastName" 
                id="lastName"
                required>
            <br><br>

            <label for="password">Password:</label>
            <input
                type="password"
                name="password"
                id="password"
                required>
            <br>
            <br>
        </fieldset>

        <fieldset>
            <legend>Photo</legend>
            <figure>
                <img src="kingfish.jpg" width="250px" height="150px">
                <figcaption>A Kingfish Student! </figcaption>
            </figure>
        </fieldset>
        <button type="submit">Submit</button>

    </fieldset>
</form>
(11)    Skriv en html-kod som ger följande resultat när den öppnas med en webbläsare
<table>
    <caption>September</caption>
     <thead>
         <th></th>
         <th>Måndag</th>
         <th>Tisdag</th>
         <th>onsdag</th>
         <th>Torsdag</th>
         <th>Fredag</th>
         <th>Lördag</th>
         <th>Söndag</th>
     </thead>
     <tbody>
     <tr>
         <th>35</th>
         <td></td>
         <td></td>
         <td></td>
         <td></td>
         <td>1</td>
         <td>2</td>
         <td>3</td>
     </tr>
     <tr>
         <th>36</th>
         <td>4</td>
         <td>5</td>
         <td>6</td>
         <td>7</td>
         <td>8</td>
         <td>9</td>
         <td>10</td>
     </tr>
     <tr>
         <th>37</th>
         <td>11</td>
         <td>12</td>
         <td>13</td>
         <td>14</td>
         <td>15</td>
         <td>16</td>
         <td>17</td>
     </tr>
     <tr>
         <th>38</th>
         <td>18</td>
         <td>19</td>
         <td>20</td>
         <td>21</td>
         <td>22</td>
         <td>23</td>
         <td>24</td>
     </tr>
     <tr>
         <th>39</th>
         <td>25</td>
         <td>26</td>
         <td>27</td>
         <td>28</td>
         <td>29</td>
         <td>30</td>
         <td></td>
     </tr>
     </tbody>
 </table>
(12)    Beskriv vad ett versionshanteringssystem gör. Ge två exempel på sådana tillämpningar.
versionshanteringssystem som git används för att skapa "check points" i ett projekt samt veta vad alla gör.
Man skapar commits och då ser vad som har gjort vad. Versionshanteringsystem i princip är för ett sätt att utvecklare att arbeta tillsammans i stora projekt.
Se vad alla har gjort. Skapa test brancher etc etc.

(13)    Vad betyder det att begå/commit filer med ett versionskontrollsystem?
Man sparar en "save point" samt gör en kommentar på vad man har utvecklat sen den senaste commiten. 
Man kan gå tillbaka i koden om man skapar commits om något dåligt skulle hända med koden.

(14)    Vad är syftet med att "pull" och "push" a "repository" med Git?
När man pushar till ett repository då skickar man över koden till github eller andra system med repositories.
När man arbetar då kommer man behöva pulla och pusha beroende på om man har arbetat på nåt projekt eller man vill ha någon annans kod.
Enklare sagt är det ett sätt att publisera kod samt ladda ner kod.