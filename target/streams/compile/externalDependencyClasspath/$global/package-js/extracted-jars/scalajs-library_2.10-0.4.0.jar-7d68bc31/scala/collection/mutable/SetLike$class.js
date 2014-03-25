ScalaJS.impls.scala_collection_mutable_SetLike$class__newBuilder__Lscala_collection_mutable_SetLike__Lscala_collection_mutable_Builder = (function($$this) {
  return ScalaJS.as.scala_collection_mutable_Builder($$this.empty__Lscala_collection_Set())
});
ScalaJS.impls.scala_collection_mutable_SetLike$class__parCombiner__Lscala_collection_mutable_SetLike__Lscala_collection_parallel_Combiner = (function($$this) {
  return ScalaJS.modules.scala_collection_parallel_mutable_ParSet().newCombiner__Lscala_collection_parallel_Combiner()
});
ScalaJS.impls.scala_collection_mutable_SetLike$class__add__Lscala_collection_mutable_SetLike__O__Z = (function($$this, elem) {
  var r = $$this.contains__O__Z(elem);
  $$this.$$plus$eq__O__Lscala_collection_mutable_SetLike(elem);
  return (!r)
});
ScalaJS.impls.scala_collection_mutable_SetLike$class__remove__Lscala_collection_mutable_SetLike__O__Z = (function($$this, elem) {
  var r = $$this.contains__O__Z(elem);
  $$this.$$minus$eq__O__Lscala_collection_mutable_SetLike(elem);
  return r
});
ScalaJS.impls.scala_collection_mutable_SetLike$class__update__Lscala_collection_mutable_SetLike__O__Z__V = (function($$this, elem, included) {
  if (included) {
    $$this.$$plus$eq__O__Lscala_collection_mutable_SetLike(elem)
  } else {
    $$this.$$minus$eq__O__Lscala_collection_mutable_SetLike(elem)
  }
});
ScalaJS.impls.scala_collection_mutable_SetLike$class__retain__Lscala_collection_mutable_SetLike__Lscala_Function1__V = (function($$this, p) {
  $$this.toList__Lscala_collection_immutable_List().foreach__Lscala_Function1__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(arg$outer, p$1) {
    return (function(elem) {
      if ((!ScalaJS.uZ(p$1.apply__O__O(elem)))) {
        return arg$outer.$$minus$eq__O__Lscala_collection_mutable_SetLike(elem)
      } else {
        return ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit()
      }
    })
  })($$this, p)))
});
ScalaJS.impls.scala_collection_mutable_SetLike$class__clear__Lscala_collection_mutable_SetLike__V = (function($$this) {
  $$this.foreach__Lscala_Function1__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(arg$outer) {
    return (function(elem) {
      return arg$outer.$$minus$eq__O__Lscala_collection_mutable_SetLike(elem)
    })
  })($$this)))
});
ScalaJS.impls.scala_collection_mutable_SetLike$class__clone__Lscala_collection_mutable_SetLike__Lscala_collection_mutable_Set = (function($$this) {
  return ScalaJS.as.scala_collection_mutable_Set(ScalaJS.as.scala_collection_generic_Growable($$this.empty__Lscala_collection_Set()).$$plus$plus$eq__Lscala_collection_TraversableOnce__Lscala_collection_generic_Growable(ScalaJS.as.scala_collection_mutable_Set($$this.repr__O()).seq__Lscala_collection_mutable_Set()))
});
ScalaJS.impls.scala_collection_mutable_SetLike$class__result__Lscala_collection_mutable_SetLike__Lscala_collection_mutable_Set = (function($$this) {
  return ScalaJS.as.scala_collection_mutable_Set($$this.repr__O())
});
ScalaJS.impls.scala_collection_mutable_SetLike$class__$plus__Lscala_collection_mutable_SetLike__O__Lscala_collection_mutable_Set = (function($$this, elem) {
  return ScalaJS.as.scala_collection_mutable_Set($$this.clone__Lscala_collection_mutable_Set().$$plus$eq__O__Lscala_collection_mutable_SetLike(elem))
});
ScalaJS.impls.scala_collection_mutable_SetLike$class__$plus__Lscala_collection_mutable_SetLike__O__O__Lscala_collection_Seq__Lscala_collection_mutable_Set = (function($$this, elem1, elem2, elems) {
  return ScalaJS.as.scala_collection_mutable_Set($$this.clone__Lscala_collection_mutable_Set().$$plus$eq__O__Lscala_collection_mutable_SetLike(elem1).$$plus$eq__O__Lscala_collection_mutable_SetLike(elem2).$$plus$plus$eq__Lscala_collection_TraversableOnce__Lscala_collection_generic_Growable(elems))
});
ScalaJS.impls.scala_collection_mutable_SetLike$class__$plus$plus__Lscala_collection_mutable_SetLike__Lscala_collection_GenTraversableOnce__Lscala_collection_mutable_Set = (function($$this, xs) {
  return ScalaJS.as.scala_collection_mutable_Set($$this.clone__Lscala_collection_mutable_Set().$$plus$plus$eq__Lscala_collection_TraversableOnce__Lscala_collection_generic_Growable(xs.seq__Lscala_collection_TraversableOnce()))
});
ScalaJS.impls.scala_collection_mutable_SetLike$class__$minus__Lscala_collection_mutable_SetLike__O__Lscala_collection_mutable_Set = (function($$this, elem) {
  return ScalaJS.as.scala_collection_mutable_Set($$this.clone__Lscala_collection_mutable_Set().$$minus$eq__O__Lscala_collection_mutable_SetLike(elem))
});
ScalaJS.impls.scala_collection_mutable_SetLike$class__$minus__Lscala_collection_mutable_SetLike__O__O__Lscala_collection_Seq__Lscala_collection_mutable_Set = (function($$this, elem1, elem2, elems) {
  return ScalaJS.as.scala_collection_mutable_Set($$this.clone__Lscala_collection_mutable_Set().$$minus$eq__O__Lscala_collection_mutable_SetLike(elem1).$$minus$eq__O__Lscala_collection_mutable_SetLike(elem2).$$minus$minus$eq__Lscala_collection_TraversableOnce__Lscala_collection_generic_Shrinkable(elems))
});
ScalaJS.impls.scala_collection_mutable_SetLike$class__$minus$minus__Lscala_collection_mutable_SetLike__Lscala_collection_GenTraversableOnce__Lscala_collection_mutable_Set = (function($$this, xs) {
  return ScalaJS.as.scala_collection_mutable_Set($$this.clone__Lscala_collection_mutable_Set().$$minus$minus$eq__Lscala_collection_TraversableOnce__Lscala_collection_generic_Shrinkable(xs.seq__Lscala_collection_TraversableOnce()))
});
ScalaJS.impls.scala_collection_mutable_SetLike$class__$less$less__Lscala_collection_mutable_SetLike__Lscala_collection_script_Message__V = (function($$this, cmd) {
  var x1 = cmd;
  matchEnd9: {
    if (ScalaJS.is.scala_collection_script_Include(x1)) {
      var x3 = ScalaJS.as.scala_collection_script_Include(x1);
      var x = x3.elem__O();
      $$this.$$plus$eq__O__Lscala_collection_mutable_SetLike(x);
      ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
      break matchEnd9
    };
    if (ScalaJS.is.scala_collection_script_Remove(x1)) {
      var x5 = ScalaJS.as.scala_collection_script_Remove(x1);
      var x$2 = x5.elem__O();
      $$this.$$minus$eq__O__Lscala_collection_mutable_SetLike(x$2);
      ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
      break matchEnd9
    };
    if (ScalaJS.is.scala_collection_script_Reset(x1)) {
      $$this.clear__V();
      ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
      break matchEnd9
    };
    if (ScalaJS.is.scala_collection_script_Script(x1)) {
      var x7 = ScalaJS.as.scala_collection_script_Script(x1);
      x7.iterator__Lscala_collection_Iterator().foreach__Lscala_Function1__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(arg$outer) {
        return (function(cmd) {
          arg$outer.$$less$less__Lscala_collection_script_Message__V(cmd);
          return ScalaJS.bV(undefined)
        })
      })($$this)));
      ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
      break matchEnd9
    };
    throw new ScalaJS.c.java_lang_UnsupportedOperationException().init___T((("message " + cmd) + " not understood"))
  }
});
ScalaJS.impls.scala_collection_mutable_SetLike$class__$init$__Lscala_collection_mutable_SetLike__V = (function($$this) {
  /*<skip>*/
});
//@ sourceMappingURL=SetLike$class.js.map
