
for i in Media/*.mp3 ; do
    TITOLO=$(echo $i | sed 's|Media/||'|sed 's|.mp3||')

    echo "
    <div class=\"row\">$TITOLO</div>
                                    <div class=\"row\">descrizione</div>
                                    <div class=\"row\">&nbsp;</div>
                                    <div class=\"row\">   
                                        <audio controls>
                                            <source src=\"$i\" type=\"audio/ogg\">
                                        </audio>
                                    </div>"

    
done
