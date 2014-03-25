/** @constructor */
ScalaJS.c.scala_text_Document = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_text_Document.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_text_Document.prototype.constructor = ScalaJS.c.scala_text_Document;
ScalaJS.c.scala_text_Document.prototype.$$colon$colon__Lscala_text_Document__Lscala_text_Document = (function(hd$2) {
  return new ScalaJS.c.scala_text_DocCons().init___Lscala_text_Document__Lscala_text_Document(hd$2, this)
});
ScalaJS.c.scala_text_Document.prototype.$$colon$colon__T__Lscala_text_Document = (function(hd) {
  return new ScalaJS.c.scala_text_DocCons().init___Lscala_text_Document__Lscala_text_Document(new ScalaJS.c.scala_text_DocText().init___T(hd), this)
});
ScalaJS.c.scala_text_Document.prototype.$$colon$div$colon__Lscala_text_Document__Lscala_text_Document = (function(hd) {
  var x$2 = hd;
  var x$1 = ScalaJS.modules.scala_text_DocBreak();
  var jsx$1 = this.$$colon$colon__Lscala_text_Document__Lscala_text_Document(x$1);
  return jsx$1.$$colon$colon__Lscala_text_Document__Lscala_text_Document(x$2)
});
ScalaJS.c.scala_text_Document.prototype.$$colon$div$colon__T__Lscala_text_Document = (function(hd) {
  var x$4 = hd;
  var x$3 = ScalaJS.modules.scala_text_DocBreak();
  var jsx$2 = this.$$colon$colon__Lscala_text_Document__Lscala_text_Document(x$3);
  return jsx$2.$$colon$colon__T__Lscala_text_Document(x$4)
});
ScalaJS.c.scala_text_Document.prototype.format__I__Ljava_io_Writer__V = (function(width, writer) {
  var x$14 = new ScalaJS.c.scala_Tuple3().init___O__O__O(ScalaJS.bI(0), ScalaJS.bZ(false), new ScalaJS.c.scala_text_DocGroup().init___Lscala_text_Document(this));
  var jsx$3 = ScalaJS.modules.scala_collection_immutable_Nil().$$colon$colon__O__Lscala_collection_immutable_List(x$14);
  this.fmt$1__p1__I__Lscala_collection_immutable_List__I__Ljava_io_Writer__V(0, jsx$3, width, writer)
});
ScalaJS.c.scala_text_Document.prototype.fits$1__p1__I__Lscala_collection_immutable_List__Z = (function(w, state) {
  var _$this = this;
  tailCallLoop: while (true) {
    var rc43 = false;
    var x4 = null;
    var x1 = state;
    if ((w < 0)) {
      return false
    };
    var o48 = ScalaJS.modules.scala_collection_immutable_List().unapplySeq__Lscala_collection_Seq__Lscala_Some(x1);
    if ((!o48.isEmpty__Z())) {
      if (((!ScalaJS.anyRefEqEq(o48.get__O(), null)) && (ScalaJS.as.scala_collection_LinearSeqOptimized(o48.get__O()).lengthCompare__I__I(0) === 0))) {
        return true
      }
    };
    if (ScalaJS.is.scala_collection_immutable_$colon$colon(x1)) {
      rc43 = true;
      x4 = ScalaJS.as.scala_collection_immutable_$colon$colon(x1);
      var p3 = ScalaJS.as.scala_Tuple3(x4.hd$1__O());
      var z = x4.tl$1__Lscala_collection_immutable_List();
      if ((p3 !== null)) {
        var p7 = ScalaJS.as.scala_text_Document(p3.$$und3__O());
        if (ScalaJS.anyRefEqEq(ScalaJS.modules.scala_text_DocNil(), p7)) {
          state = z;
          continue tailCallLoop
        }
      }
    };
    if (rc43) {
      var p8 = ScalaJS.as.scala_Tuple3(x4.hd$1__O());
      var z$2 = x4.tl$1__Lscala_collection_immutable_List();
      if ((p8 !== null)) {
        var i = ScalaJS.uI(p8.$$und1__O());
        var b = ScalaJS.uZ(p8.$$und2__O());
        var p10 = ScalaJS.as.scala_text_Document(p8.$$und3__O());
        if (ScalaJS.is.scala_text_DocCons(p10)) {
          var x11 = ScalaJS.as.scala_text_DocCons(p10);
          var h = x11.hd__Lscala_text_Document();
          var t = x11.tl__Lscala_text_Document();
          var x$6 = new ScalaJS.c.scala_Tuple3().init___O__O__O(ScalaJS.bI(i), ScalaJS.bZ(b), h);
          var x$5 = new ScalaJS.c.scala_Tuple3().init___O__O__O(ScalaJS.bI(i), ScalaJS.bZ(b), t);
          var jsx$4 = z$2.$$colon$colon__O__Lscala_collection_immutable_List(x$5);
          state = jsx$4.$$colon$colon__O__Lscala_collection_immutable_List(x$6);
          continue tailCallLoop
        }
      }
    };
    if (rc43) {
      var p12 = ScalaJS.as.scala_Tuple3(x4.hd$1__O());
      var z$3 = x4.tl$1__Lscala_collection_immutable_List();
      if ((p12 !== null)) {
        var p16 = ScalaJS.as.scala_text_Document(p12.$$und3__O());
        if (ScalaJS.is.scala_text_DocText(p16)) {
          var x17 = ScalaJS.as.scala_text_DocText(p16);
          var t$2 = x17.txt__T();
          var temp$w = (w - ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__length__Lscala_scalajs_runtime_RuntimeString__I(t$2));
          var temp$state = z$3;
          w = temp$w;
          state = temp$state;
          continue tailCallLoop
        }
      }
    };
    if (rc43) {
      var p18 = ScalaJS.as.scala_Tuple3(x4.hd$1__O());
      var z$4 = x4.tl$1__Lscala_collection_immutable_List();
      if ((p18 !== null)) {
        var i$2 = ScalaJS.uI(p18.$$und1__O());
        var b$2 = ScalaJS.uZ(p18.$$und2__O());
        var p20 = ScalaJS.as.scala_text_Document(p18.$$und3__O());
        if (ScalaJS.is.scala_text_DocNest(p20)) {
          var x21 = ScalaJS.as.scala_text_DocNest(p20);
          var ii = x21.indent__I();
          var d = x21.doc__Lscala_text_Document();
          var x$7 = new ScalaJS.c.scala_Tuple3().init___O__O__O(ScalaJS.bI((i$2 + ii)), ScalaJS.bZ(b$2), d);
          state = z$4.$$colon$colon__O__Lscala_collection_immutable_List(x$7);
          continue tailCallLoop
        }
      }
    };
    if (rc43) {
      var p22 = ScalaJS.as.scala_Tuple3(x4.hd$1__O());
      var z$5 = x4.tl$1__Lscala_collection_immutable_List();
      if ((p22 !== null)) {
        var p25 = ScalaJS.uZ(p22.$$und2__O());
        var p26 = ScalaJS.as.scala_text_Document(p22.$$und3__O());
        if ((false === p25)) {
          if (ScalaJS.anyRefEqEq(ScalaJS.modules.scala_text_DocBreak(), p26)) {
            var temp$w = (w - 1);
            var temp$state = z$5;
            w = temp$w;
            state = temp$state;
            continue tailCallLoop
          }
        }
      }
    };
    if (rc43) {
      var p27 = ScalaJS.as.scala_Tuple3(x4.hd$1__O());
      if ((p27 !== null)) {
        var p30 = ScalaJS.uZ(p27.$$und2__O());
        var p31 = ScalaJS.as.scala_text_Document(p27.$$und3__O());
        if ((true === p30)) {
          if (ScalaJS.anyRefEqEq(ScalaJS.modules.scala_text_DocBreak(), p31)) {
            return true
          }
        }
      }
    };
    if (rc43) {
      var p32 = ScalaJS.as.scala_Tuple3(x4.hd$1__O());
      var z$6 = x4.tl$1__Lscala_collection_immutable_List();
      if ((p32 !== null)) {
        var i$3 = ScalaJS.uI(p32.$$und1__O());
        var p35 = ScalaJS.as.scala_text_Document(p32.$$und3__O());
        if (ScalaJS.is.scala_text_DocGroup(p35)) {
          var x36 = ScalaJS.as.scala_text_DocGroup(p35);
          var d$2 = x36.doc__Lscala_text_Document();
          var x$8 = new ScalaJS.c.scala_Tuple3().init___O__O__O(ScalaJS.bI(i$3), ScalaJS.bZ(false), d$2);
          state = z$6.$$colon$colon__O__Lscala_collection_immutable_List(x$8);
          continue tailCallLoop
        }
      }
    };
    throw new ScalaJS.c.scala_MatchError().init___O(x1)
  }
});
ScalaJS.c.scala_text_Document.prototype.spaces$1__p1__I__Ljava_io_Writer__V = (function(n, writer$1) {
  var rem = n;
  while ((rem >= 16)) {
    writer$1.write__T__V("                ");
    rem = (rem - 16)
  };
  if ((rem >= 8)) {
    writer$1.write__T__V("        ");
    rem = (rem - 8)
  };
  if ((rem >= 4)) {
    writer$1.write__T__V("    ");
    rem = (rem - 4)
  };
  if ((rem >= 2)) {
    writer$1.write__T__V("  ");
    rem = (rem - 2)
  };
  if ((rem === 1)) {
    writer$1.write__T__V(" ")
  }
});
ScalaJS.c.scala_text_Document.prototype.fmt$1__p1__I__Lscala_collection_immutable_List__I__Ljava_io_Writer__V = (function(k, state, width$1, writer$1) {
  var _$this = this;
  tailCallLoop: while (true) {
    var rc39 = false;
    var x4 = null;
    var x1 = state;
    matchEnd40: {
      var o43 = ScalaJS.modules.scala_collection_immutable_List().unapplySeq__Lscala_collection_Seq__Lscala_Some(x1);
      if ((!o43.isEmpty__Z())) {
        if (((!ScalaJS.anyRefEqEq(o43.get__O(), null)) && (ScalaJS.as.scala_collection_LinearSeqOptimized(o43.get__O()).lengthCompare__I__I(0) === 0))) {
          ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
          break matchEnd40
        }
      };
      if (ScalaJS.is.scala_collection_immutable_$colon$colon(x1)) {
        rc39 = true;
        x4 = ScalaJS.as.scala_collection_immutable_$colon$colon(x1);
        var p3 = ScalaJS.as.scala_Tuple3(x4.hd$1__O());
        var z = x4.tl$1__Lscala_collection_immutable_List();
        if ((p3 !== null)) {
          var p7 = ScalaJS.as.scala_text_Document(p3.$$und3__O());
          if (ScalaJS.anyRefEqEq(ScalaJS.modules.scala_text_DocNil(), p7)) {
            state = z;
            continue tailCallLoop;
            ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
            break matchEnd40
          }
        }
      };
      if (rc39) {
        var p8 = ScalaJS.as.scala_Tuple3(x4.hd$1__O());
        var z$2 = x4.tl$1__Lscala_collection_immutable_List();
        if ((p8 !== null)) {
          var i = ScalaJS.uI(p8.$$und1__O());
          var b = ScalaJS.uZ(p8.$$und2__O());
          var p10 = ScalaJS.as.scala_text_Document(p8.$$und3__O());
          if (ScalaJS.is.scala_text_DocCons(p10)) {
            var x11 = ScalaJS.as.scala_text_DocCons(p10);
            var h = x11.hd__Lscala_text_Document();
            var t = x11.tl__Lscala_text_Document();
            var x$10 = new ScalaJS.c.scala_Tuple3().init___O__O__O(ScalaJS.bI(i), ScalaJS.bZ(b), h);
            var x$9 = new ScalaJS.c.scala_Tuple3().init___O__O__O(ScalaJS.bI(i), ScalaJS.bZ(b), t);
            var jsx$5 = z$2.$$colon$colon__O__Lscala_collection_immutable_List(x$9);
            state = jsx$5.$$colon$colon__O__Lscala_collection_immutable_List(x$10);
            continue tailCallLoop;
            ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
            break matchEnd40
          }
        }
      };
      if (rc39) {
        var p12 = ScalaJS.as.scala_Tuple3(x4.hd$1__O());
        var z$3 = x4.tl$1__Lscala_collection_immutable_List();
        if ((p12 !== null)) {
          var p15 = ScalaJS.as.scala_text_Document(p12.$$und3__O());
          if (ScalaJS.is.scala_text_DocText(p15)) {
            var x16 = ScalaJS.as.scala_text_DocText(p15);
            var t$2 = x16.txt__T();
            writer$1.write__T__V(t$2);
            var temp$k = (k + ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__length__Lscala_scalajs_runtime_RuntimeString__I(t$2));
            var temp$state = z$3;
            k = temp$k;
            state = temp$state;
            continue tailCallLoop;
            ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
            break matchEnd40
          }
        }
      };
      if (rc39) {
        var p17 = ScalaJS.as.scala_Tuple3(x4.hd$1__O());
        var z$4 = x4.tl$1__Lscala_collection_immutable_List();
        if ((p17 !== null)) {
          var i$2 = ScalaJS.uI(p17.$$und1__O());
          var b$2 = ScalaJS.uZ(p17.$$und2__O());
          var p19 = ScalaJS.as.scala_text_Document(p17.$$und3__O());
          if (ScalaJS.is.scala_text_DocNest(p19)) {
            var x20 = ScalaJS.as.scala_text_DocNest(p19);
            var ii = x20.indent__I();
            var d = x20.doc__Lscala_text_Document();
            var x$11 = new ScalaJS.c.scala_Tuple3().init___O__O__O(ScalaJS.bI((i$2 + ii)), ScalaJS.bZ(b$2), d);
            state = z$4.$$colon$colon__O__Lscala_collection_immutable_List(x$11);
            continue tailCallLoop;
            ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
            break matchEnd40
          }
        }
      };
      if (rc39) {
        var p21 = ScalaJS.as.scala_Tuple3(x4.hd$1__O());
        var z$5 = x4.tl$1__Lscala_collection_immutable_List();
        if ((p21 !== null)) {
          var i$3 = ScalaJS.uI(p21.$$und1__O());
          var p23 = ScalaJS.uZ(p21.$$und2__O());
          var p24 = ScalaJS.as.scala_text_Document(p21.$$und3__O());
          if ((true === p23)) {
            if (ScalaJS.anyRefEqEq(ScalaJS.modules.scala_text_DocBreak(), p24)) {
              writer$1.write__T__V("\n");
              _$this.spaces$1__p1__I__Ljava_io_Writer__V(i$3, writer$1);
              var temp$k = i$3;
              var temp$state = z$5;
              k = temp$k;
              state = temp$state;
              continue tailCallLoop;
              ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
              break matchEnd40
            }
          }
        }
      };
      if (rc39) {
        var p25 = ScalaJS.as.scala_Tuple3(x4.hd$1__O());
        var z$6 = x4.tl$1__Lscala_collection_immutable_List();
        if ((p25 !== null)) {
          var p27 = ScalaJS.uZ(p25.$$und2__O());
          var p28 = ScalaJS.as.scala_text_Document(p25.$$und3__O());
          if ((false === p27)) {
            if (ScalaJS.anyRefEqEq(ScalaJS.modules.scala_text_DocBreak(), p28)) {
              writer$1.write__T__V(" ");
              var temp$k = (k + 1);
              var temp$state = z$6;
              k = temp$k;
              state = temp$state;
              continue tailCallLoop;
              ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
              break matchEnd40
            }
          }
        }
      };
      if (rc39) {
        var p29 = ScalaJS.as.scala_Tuple3(x4.hd$1__O());
        var z$7 = x4.tl$1__Lscala_collection_immutable_List();
        if ((p29 !== null)) {
          var i$4 = ScalaJS.uI(p29.$$und1__O());
          var p31 = ScalaJS.as.scala_text_Document(p29.$$und3__O());
          if (ScalaJS.is.scala_text_DocGroup(p31)) {
            var x32 = ScalaJS.as.scala_text_DocGroup(p31);
            var d$2 = x32.doc__Lscala_text_Document();
            var jsx$8 = _$this;
            var jsx$7 = (width$1 - k);
            var x$12 = new ScalaJS.c.scala_Tuple3().init___O__O__O(ScalaJS.bI(i$4), ScalaJS.bZ(false), d$2);
            var jsx$6 = z$7.$$colon$colon__O__Lscala_collection_immutable_List(x$12);
            var fitsFlat = jsx$8.fits$1__p1__I__Lscala_collection_immutable_List__Z(jsx$7, jsx$6);
            var x$13 = new ScalaJS.c.scala_Tuple3().init___O__O__O(ScalaJS.bI(i$4), ScalaJS.bZ((!fitsFlat)), d$2);
            state = z$7.$$colon$colon__O__Lscala_collection_immutable_List(x$13);
            continue tailCallLoop;
            ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
            break matchEnd40
          }
        }
      };
      ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
      break matchEnd40
    };
    return undefined
  }
});
ScalaJS.c.scala_text_Document.prototype.format__I__Ljava_io_Writer__ = (function(width, writer) {
  return ScalaJS.bV(this.format__I__Ljava_io_Writer__V(width, writer))
});
ScalaJS.c.scala_text_Document.prototype.$$colon$div$colon__T__ = (function(hd) {
  return this.$$colon$div$colon__T__Lscala_text_Document(hd)
});
ScalaJS.c.scala_text_Document.prototype.$$colon$div$colon__Lscala_text_Document__ = (function(hd$2) {
  return this.$$colon$div$colon__Lscala_text_Document__Lscala_text_Document(hd$2)
});
ScalaJS.c.scala_text_Document.prototype.$$colon$colon__T__ = (function(hd$3) {
  return this.$$colon$colon__T__Lscala_text_Document(hd$3)
});
ScalaJS.c.scala_text_Document.prototype.$$colon$colon__Lscala_text_Document__ = (function(hd$4) {
  return this.$$colon$colon__Lscala_text_Document__Lscala_text_Document(hd$4)
});
/** @constructor */
ScalaJS.inheritable.scala_text_Document = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_text_Document.prototype = ScalaJS.c.scala_text_Document.prototype;
ScalaJS.is.scala_text_Document = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_text_Document)))
});
ScalaJS.as.scala_text_Document = (function(obj) {
  if ((ScalaJS.is.scala_text_Document(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.text.Document")
  }
});
ScalaJS.isArrayOf.scala_text_Document = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_text_Document)))
});
ScalaJS.asArrayOf.scala_text_Document = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_text_Document(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.text.Document;", depth)
  }
});
ScalaJS.data.scala_text_Document = new ScalaJS.ClassTypeData({
  scala_text_Document: 0
}, false, "scala.text.Document", ScalaJS.data.java_lang_Object, {
  scala_text_Document: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_text_Document.prototype.$classData = ScalaJS.data.scala_text_Document;
//@ sourceMappingURL=Document.js.map
