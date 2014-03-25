ScalaJS.impls.scala_collection_mutable_BufferLike$class__remove__Lscala_collection_mutable_Buffer__I__I__V = (function($$this, n, count) {
  ScalaJS.modules.scala_runtime_RichInt().until$extension0__I__I__Lscala_collection_immutable_Range(ScalaJS.modules.scala_Predef().intWrapper__I__I(0), count).foreach__Lscala_Function1__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(arg$outer, n$1) {
    return (function(i) {
      i = ScalaJS.uI(i);
      return arg$outer.remove__I__O(n$1)
    })
  })($$this, n)))
});
ScalaJS.impls.scala_collection_mutable_BufferLike$class__$minus$eq__Lscala_collection_mutable_Buffer__O__Lscala_collection_mutable_Buffer = (function($$this, x) {
  var i = $$this.indexOf__O__I(x);
  if ((i !== -1)) {
    $$this.remove__I__O(i)
  } else {
    ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit()
  };
  return $$this
});
ScalaJS.impls.scala_collection_mutable_BufferLike$class__$plus$plus$eq$colon__Lscala_collection_mutable_Buffer__Lscala_collection_TraversableOnce__Lscala_collection_mutable_Buffer = (function($$this, xs) {
  $$this.insertAll__I__Lscala_collection_Traversable__V(0, xs.toTraversable__Lscala_collection_Traversable());
  return $$this
});
ScalaJS.impls.scala_collection_mutable_BufferLike$class__append__Lscala_collection_mutable_Buffer__Lscala_collection_Seq__V = (function($$this, elems) {
  $$this.appendAll__Lscala_collection_TraversableOnce__V(elems)
});
ScalaJS.impls.scala_collection_mutable_BufferLike$class__appendAll__Lscala_collection_mutable_Buffer__Lscala_collection_TraversableOnce__V = (function($$this, xs) {
  $$this.$$plus$plus$eq__Lscala_collection_TraversableOnce__Lscala_collection_generic_Growable(xs)
});
ScalaJS.impls.scala_collection_mutable_BufferLike$class__prepend__Lscala_collection_mutable_Buffer__Lscala_collection_Seq__V = (function($$this, elems) {
  $$this.prependAll__Lscala_collection_TraversableOnce__V(elems)
});
ScalaJS.impls.scala_collection_mutable_BufferLike$class__prependAll__Lscala_collection_mutable_Buffer__Lscala_collection_TraversableOnce__V = (function($$this, xs) {
  var x$1 = xs;
  $$this.$$plus$plus$eq$colon__Lscala_collection_TraversableOnce__Lscala_collection_mutable_Buffer(x$1)
});
ScalaJS.impls.scala_collection_mutable_BufferLike$class__insert__Lscala_collection_mutable_Buffer__I__Lscala_collection_Seq__V = (function($$this, n, elems) {
  $$this.insertAll__I__Lscala_collection_Traversable__V(n, elems)
});
ScalaJS.impls.scala_collection_mutable_BufferLike$class__trimStart__Lscala_collection_mutable_Buffer__I__V = (function($$this, n) {
  $$this.remove__I__I__V(0, n)
});
ScalaJS.impls.scala_collection_mutable_BufferLike$class__trimEnd__Lscala_collection_mutable_Buffer__I__V = (function($$this, n) {
  $$this.remove__I__I__V(ScalaJS.modules.scala_runtime_RichInt().max$extension__I__I__I(ScalaJS.modules.scala_Predef().intWrapper__I__I(($$this.length__I() - n)), 0), n)
});
ScalaJS.impls.scala_collection_mutable_BufferLike$class__$less$less__Lscala_collection_mutable_Buffer__Lscala_collection_script_Message__V = (function($$this, cmd) {
  var rc38 = false;
  var x3 = null;
  var rc39 = false;
  var x12 = null;
  var rc40 = false;
  var x19 = null;
  var x1 = cmd;
  matchEnd41: {
    if (ScalaJS.is.scala_collection_script_Include(x1)) {
      rc38 = true;
      x3 = ScalaJS.as.scala_collection_script_Include(x1);
      var p2 = x3.location__Lscala_collection_script_Location();
      var x = x3.elem__O();
      if (ScalaJS.anyRefEqEq(ScalaJS.modules.scala_collection_script_Start(), p2)) {
        $$this.prepend__Lscala_collection_Seq__V(ScalaJS.modules.scala_Predef().genericWrapArray__O__Lscala_collection_mutable_WrappedArray(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.java_lang_Object.getArrayOf(), [x])));
        ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
        break matchEnd41
      }
    };
    if (rc38) {
      var p4 = x3.location__Lscala_collection_script_Location();
      var x$2 = x3.elem__O();
      if (ScalaJS.anyRefEqEq(ScalaJS.modules.scala_collection_script_End(), p4)) {
        $$this.append__Lscala_collection_Seq__V(ScalaJS.modules.scala_Predef().genericWrapArray__O__Lscala_collection_mutable_WrappedArray(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.java_lang_Object.getArrayOf(), [x$2])));
        ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
        break matchEnd41
      }
    };
    if (rc38) {
      var p6 = x3.location__Lscala_collection_script_Location();
      var x$3 = x3.elem__O();
      if (ScalaJS.is.scala_collection_script_Index(p6)) {
        var x8 = ScalaJS.as.scala_collection_script_Index(p6);
        var n = x8.n__I();
        $$this.insert__I__Lscala_collection_Seq__V(n, ScalaJS.modules.scala_Predef().genericWrapArray__O__Lscala_collection_mutable_WrappedArray(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.java_lang_Object.getArrayOf(), [x$3])));
        ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
        break matchEnd41
      }
    };
    if (rc38) {
      var p9 = x3.location__Lscala_collection_script_Location();
      var x$4 = x3.elem__O();
      if (ScalaJS.anyRefEqEq(ScalaJS.modules.scala_collection_script_NoLo(), p9)) {
        $$this.$$plus$eq__O__Lscala_collection_mutable_Buffer(x$4);
        ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
        break matchEnd41
      }
    };
    if (ScalaJS.is.scala_collection_script_Update(x1)) {
      rc39 = true;
      x12 = ScalaJS.as.scala_collection_script_Update(x1);
      var p11 = x12.location__Lscala_collection_script_Location();
      var x$5 = x12.elem__O();
      if (ScalaJS.anyRefEqEq(ScalaJS.modules.scala_collection_script_Start(), p11)) {
        $$this.update__I__O__V(0, x$5);
        ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
        break matchEnd41
      }
    };
    if (rc39) {
      var p13 = x12.location__Lscala_collection_script_Location();
      var x$6 = x12.elem__O();
      if (ScalaJS.anyRefEqEq(ScalaJS.modules.scala_collection_script_End(), p13)) {
        $$this.update__I__O__V(($$this.length__I() - 1), x$6);
        ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
        break matchEnd41
      }
    };
    if (rc39) {
      var p15 = x12.location__Lscala_collection_script_Location();
      var x$7 = x12.elem__O();
      if (ScalaJS.is.scala_collection_script_Index(p15)) {
        var x17 = ScalaJS.as.scala_collection_script_Index(p15);
        var n$2 = x17.n__I();
        $$this.update__I__O__V(n$2, x$7);
        ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
        break matchEnd41
      }
    };
    if (ScalaJS.is.scala_collection_script_Remove(x1)) {
      rc40 = true;
      x19 = ScalaJS.as.scala_collection_script_Remove(x1);
      var p18 = x19.location__Lscala_collection_script_Location();
      var x$8 = x19.elem__O();
      if (ScalaJS.anyRefEqEq(ScalaJS.modules.scala_collection_script_Start(), p18)) {
        if (ScalaJS.anyEqEq($$this.apply__O__O(ScalaJS.bI(0)), x$8)) {
          $$this.remove__I__O(0);
          ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
          break matchEnd41
        } else {
          ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
          break matchEnd41
        }
      }
    };
    if (rc40) {
      var p20 = x19.location__Lscala_collection_script_Location();
      var x$9 = x19.elem__O();
      if (ScalaJS.anyRefEqEq(ScalaJS.modules.scala_collection_script_End(), p20)) {
        if (ScalaJS.anyEqEq($$this.apply__O__O(ScalaJS.bI(($$this.length__I() - 1))), x$9)) {
          $$this.remove__I__O(($$this.length__I() - 1));
          ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
          break matchEnd41
        } else {
          ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
          break matchEnd41
        }
      }
    };
    if (rc40) {
      var p22 = x19.location__Lscala_collection_script_Location();
      var x$10 = x19.elem__O();
      if (ScalaJS.is.scala_collection_script_Index(p22)) {
        var x24 = ScalaJS.as.scala_collection_script_Index(p22);
        var n$3 = x24.n__I();
        if (ScalaJS.anyEqEq($$this.apply__O__O(ScalaJS.bI(n$3)), x$10)) {
          $$this.remove__I__O(n$3);
          ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
          break matchEnd41
        } else {
          ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
          break matchEnd41
        }
      }
    };
    if (rc40) {
      var p25 = x19.location__Lscala_collection_script_Location();
      var x$11 = x19.elem__O();
      if (ScalaJS.anyRefEqEq(ScalaJS.modules.scala_collection_script_NoLo(), p25)) {
        $$this.$$minus$eq__O__Lscala_collection_mutable_Buffer(x$11);
        ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
        break matchEnd41
      }
    };
    if (ScalaJS.is.scala_collection_script_Reset(x1)) {
      $$this.clear__V();
      ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
      break matchEnd41
    };
    if (ScalaJS.is.scala_collection_script_Script(x1)) {
      var x36 = ScalaJS.as.scala_collection_script_Script(x1);
      x36.iterator__Lscala_collection_Iterator().foreach__Lscala_Function1__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(arg$outer) {
        return (function(cmd) {
          arg$outer.$$less$less__Lscala_collection_script_Message__V(cmd);
          return ScalaJS.bV(undefined)
        })
      })($$this)));
      ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
      break matchEnd41
    };
    throw new ScalaJS.c.java_lang_UnsupportedOperationException().init___T((("message " + cmd) + " not understood"))
  }
});
ScalaJS.impls.scala_collection_mutable_BufferLike$class__stringPrefix__Lscala_collection_mutable_Buffer__T = (function($$this) {
  return "Buffer"
});
ScalaJS.impls.scala_collection_mutable_BufferLike$class__readOnly__Lscala_collection_mutable_Buffer__Lscala_collection_Seq = (function($$this) {
  return $$this.toSeq__Lscala_collection_Seq()
});
ScalaJS.impls.scala_collection_mutable_BufferLike$class__$plus$plus__Lscala_collection_mutable_Buffer__Lscala_collection_GenTraversableOnce__Lscala_collection_mutable_Buffer = (function($$this, xs) {
  return ScalaJS.as.scala_collection_mutable_Buffer($$this.clone__Lscala_collection_mutable_Buffer().$$plus$plus$eq__Lscala_collection_TraversableOnce__Lscala_collection_generic_Growable(xs.seq__Lscala_collection_TraversableOnce()))
});
ScalaJS.impls.scala_collection_mutable_BufferLike$class__$minus__Lscala_collection_mutable_Buffer__O__Lscala_collection_mutable_Buffer = (function($$this, elem) {
  return $$this.clone__Lscala_collection_mutable_Buffer().$$minus$eq__O__Lscala_collection_mutable_Buffer(elem)
});
ScalaJS.impls.scala_collection_mutable_BufferLike$class__$minus__Lscala_collection_mutable_Buffer__O__O__Lscala_collection_Seq__Lscala_collection_mutable_Buffer = (function($$this, elem1, elem2, elems) {
  return ScalaJS.as.scala_collection_mutable_Buffer($$this.clone__Lscala_collection_mutable_Buffer().$$minus$eq__O__Lscala_collection_mutable_Buffer(elem1).$$minus$eq__O__Lscala_collection_mutable_Buffer(elem2).$$minus$minus$eq__Lscala_collection_TraversableOnce__Lscala_collection_generic_Shrinkable(elems))
});
ScalaJS.impls.scala_collection_mutable_BufferLike$class__$minus$minus__Lscala_collection_mutable_Buffer__Lscala_collection_GenTraversableOnce__Lscala_collection_mutable_Buffer = (function($$this, xs) {
  return ScalaJS.as.scala_collection_mutable_Buffer($$this.clone__Lscala_collection_mutable_Buffer().$$minus$minus$eq__Lscala_collection_TraversableOnce__Lscala_collection_generic_Shrinkable(xs.seq__Lscala_collection_TraversableOnce()))
});
ScalaJS.impls.scala_collection_mutable_BufferLike$class__clone__Lscala_collection_mutable_Buffer__Lscala_collection_mutable_Buffer = (function($$this) {
  var bf = $$this.newBuilder__Lscala_collection_mutable_Builder();
  bf.$$plus$plus$eq__Lscala_collection_TraversableOnce__Lscala_collection_generic_Growable($$this);
  return ScalaJS.as.scala_collection_mutable_Buffer(bf.result__O())
});
ScalaJS.impls.scala_collection_mutable_BufferLike$class__$init$__Lscala_collection_mutable_Buffer__V = (function($$this) {
  /*<skip>*/
});
//@ sourceMappingURL=BufferLike$class.js.map
