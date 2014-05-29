using System;
using System.Collections.Generic;
using System.Text.RegularExpressions;
using Engine.Interfaces;
using Microsoft.Xna.Framework;
using Microsoft.Xna.Framework.GamerServices;

namespace Engine.Xna
{
    public class XnaLayout : ILayout
    { 
        public ILayoutView LayoutView { get; set; }
        public IScreen Screen { get; set; }
        public LayoutPosition LayoutPosition { get; set; }
        public int Width { get; set; }
        public int Height { get; set; }
        public ScreenOrientation ScreenOrientation { get; set; }
        public bool AlwaysTick { get; set; }

        public XnaLayout(XnaScreen screen, int width, int height)
        {
            Screen = screen;
            Width = width;
            Height = height;

            ScreenOrientation = ScreenOrientation.Vertical;
            LayoutPosition = new LayoutPosition(new Size(width, height));

            UIManager = new XnaUIManager(this);

        }
         
        private bool active;
        public bool Active
        {
            get { return active; }
            set
            {
                if (value)
                {
                    if (Screen.OneLayoutAtATime)
                    {
                        foreach (var layout in Screen.Layouts)
                        {
                            layout.Active = false;
                        }
                        this.active = true;
                    }
                    else
                    {
                        active = true;
                    }
                }
                else
                {
                    active = false;
                }
            }
        }

        public ILayout Offset(int x, int y)
        {
            LayoutPosition.Offset.X = x;
            LayoutPosition.Offset.Y = y;
            return this;
        }
        public void ForceScreenOrientation(ScreenOrientation orientation)
        {
            ScreenOrientation = orientation;
        }


        public ILayout LeftOf(ILayout layout)
        {
            LayoutPosition.Right = layout;
            layout.LayoutPosition.Left = this;
            return this;
        }

        public ILayout RightOf(ILayout layout)
        {
            LayoutPosition.Left = layout;
            layout.LayoutPosition.Right = this;
            return this;
        }

        public ILayout Above(ILayout layout)
        {
            LayoutPosition.Bottom = layout;
            layout.LayoutPosition.Top = this;
            return this;
        }

        public ILayout Below(ILayout layout)
        {
            LayoutPosition.Top = layout;
            layout.LayoutPosition.Bottom = this;
            return this;
        }

        public ILayout MakeActive()
        {
            Active = true;
            Screen.ChangeLayout(this);
            return this;
        }

        public ILayout ForceTick()
        {
            AlwaysTick = true;
            return this;
        }
        public ILayout SetScreenOrientation(ScreenOrientation orientation)
        {

            ScreenOrientation = orientation;
            return this;
        }


        public void ProcessTouchEvent(TouchType touchType, int x, int y)
        {
            if (UIManager.ProcessTouchEvent(touchType, x, y))
            {
                return;
            }
            LayoutView.TouchManager.ProcessTouchEvent(touchType, x, y);
        }
        
        
        public IUIManager UIManager { get; set; }

    }


    public class XnaUIManager : IUIManager
    {
        public ILayout Layout { get; set; }
        public List<IUITextBox> TextBoxes { get; set; }

        public XnaUIManager(XnaLayout xnaLayout)
        {
            Layout = xnaLayout;
            TextBoxes = new List<IUITextBox>();

        }

        public bool ProcessTouchEvent(TouchType touchType, int x, int y)
        {
            foreach (var layout in Layout.Screen.Layouts)
            {
                layout.UIManager.ClearFocus();
            } 
            
            foreach (var uiTextBox in TextBoxes)
            {
                if (uiTextBox.Rectangle.IsInside(x, y))
                {
                    uiTextBox.Focus();

                    return true;
                }
            }
            return false;
        }

        public IUITextBox CreateTextBox(Rectangle rectangle, ILayoutView layoutView, Action<string> onTextChange = null)
        {
            var xnaUiTextBox = new XnaUITextBox(this, rectangle, layoutView, onTextChange);
            TextBoxes.Add(xnaUiTextBox);
            return xnaUiTextBox;
        }

        public void ClearFocus()
        {

            foreach (var uiTextBox in TextBoxes)
            {
                uiTextBox.Blur();
            }
        }
    }

    public class XnaUITextBox : IUITextBox
    {
        public XnaUITextBox(IUIManager uiManager, Rectangle rectangle, ILayoutView layoutView, Action<string> onTextChange)
        {
            UIManager = uiManager;
            Rectangle = rectangle;
            LayoutView = layoutView;
            OnTextChange = onTextChange;
        }

        public bool Focused { get; set; }

        public IUIManager UIManager { get; set; }
        
        public string Text { get; set; }

        public Rectangle Rectangle { get; set; }

        public ILayoutView LayoutView { get; set; }

        public Action<string> OnTextChange { get; set; }

        public void Focus()
        {
            Focused = true;
            UIManager.Layout.Screen.ScreenManager.Client.ClientSettings.GetKeyboardInput((text) =>
            {
                Text = text;
            });
//            var content = j.Result;

        }

        public void Draw()
        {
/*
            Draw text box draw blinking cursor when focused
                take in the font u want
                    on focus if applicable, open up the keyboard and move the whole layout up to y-height-idk10?
                        Capture all keyboard input, if any textbox is focused, pass it along, update OnTextChange 
*/
        }
        public void Blur()
        {
            Focused = false;
        }
    }
}