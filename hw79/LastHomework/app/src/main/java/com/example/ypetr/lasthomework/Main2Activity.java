package com.example.ypetr.lasthomework;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.widget.TextView;

public class Main2Activity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main2);

        TextView textView = (TextView)findViewById(R.id.textView);

        Bundle bundle = getIntent().getExtras();
        if (bundle == null) {
            return;
        }
        String text = bundle.getString("text");


        textView.setText(text);
    }
}
