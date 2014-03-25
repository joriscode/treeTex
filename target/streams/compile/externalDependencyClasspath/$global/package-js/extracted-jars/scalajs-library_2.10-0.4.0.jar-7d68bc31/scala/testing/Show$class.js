ScalaJS.impls.scala_testing_Show$class__SymApply__Lscala_testing_Show__Lscala_Symbol__Lscala_testing_Show$SymApply = (function($$this, f) {
  return new ScalaJS.c.scala_testing_Show$SymApply().init___Lscala_testing_Show__Lscala_Symbol($$this, f)
});
ScalaJS.impls.scala_testing_Show$class__symApply__Lscala_testing_Show__Lscala_Symbol__Lscala_testing_Show$SymApply = (function($$this, sym) {
  return new ScalaJS.c.scala_testing_Show$SymApply().init___Lscala_testing_Show__Lscala_Symbol($$this, sym)
});
ScalaJS.impls.scala_testing_Show$class__test__Lscala_testing_Show__Lscala_Symbol__Lscala_collection_Seq__T = (function($$this, f, args) {
  var args1 = ScalaJS.as.scala_collection_Seq(args.map__Lscala_Function1__Lscala_collection_generic_CanBuildFrom__O(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function() {
    return (function(x$1) {
      return x$1
    })
  })()), ScalaJS.modules.scala_collection_Seq().canBuildFrom__Lscala_collection_generic_CanBuildFrom()));
  var x1 = ScalaJS.as.scala_collection_immutable_List(ScalaJS.modules.scala_Predef().refArrayOps__AO__Lscala_collection_mutable_ArrayOps(ScalaJS.asArrayOf.java_lang_Object(ScalaJS.objectGetClass($$this).getMethods__ALjava_lang_reflect_Method(), 1)).toList__Lscala_collection_immutable_List().filter__Lscala_Function1__O(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(f$1) {
    return (function(x$2) {
      return ScalaJS.bZ(ScalaJS.anyRefEqEq(x$2.getName__T(), f$1.name__T()))
    })
  })(f))));
  var o8 = ScalaJS.modules.scala_collection_immutable_List().unapplySeq__Lscala_collection_Seq__Lscala_Some(x1);
  if ((!o8.isEmpty__Z())) {
    if (((!ScalaJS.anyRefEqEq(o8.get__O(), null)) && (ScalaJS.as.scala_collection_LinearSeqOptimized(o8.get__O()).lengthCompare__I__I(0) === 0))) {
      return (("" + f.name__T()) + " is not defined")
    }
  };
  var o10 = ScalaJS.modules.scala_collection_immutable_List().unapplySeq__Lscala_collection_Seq__Lscala_Some(x1);
  if ((!o10.isEmpty__Z())) {
    if (((!ScalaJS.anyRefEqEq(o10.get__O(), null)) && (ScalaJS.as.scala_collection_LinearSeqOptimized(o10.get__O()).lengthCompare__I__I(1) === 0))) {
      var m = ScalaJS.as.java_lang_reflect_Method(ScalaJS.as.scala_collection_LinearSeqOptimized(o10.get__O()).apply__I__O(0));
      return ScalaJS.impls.scala_testing_Show$class__testMethod$1__Lscala_testing_Show__Ljava_lang_reflect_Method__Lscala_collection_Seq__Lscala_Symbol__Lscala_collection_Seq__T($$this, m, args1, f, args)
    }
  };
  var x1$2 = ScalaJS.as.scala_collection_immutable_List(x1.filter__Lscala_Function1__O(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(args$1) {
    return (function(x$3) {
      return ScalaJS.bZ((x$3.getParameterTypes__ALjava_lang_Class().underlying.length === args$1.length__I()))
    })
  })(args))));
  var o8$2 = ScalaJS.modules.scala_collection_immutable_List().unapplySeq__Lscala_collection_Seq__Lscala_Some(x1$2);
  if ((!o8$2.isEmpty__Z())) {
    if (((!ScalaJS.anyRefEqEq(o8$2.get__O(), null)) && (ScalaJS.as.scala_collection_LinearSeqOptimized(o8$2.get__O()).lengthCompare__I__I(0) === 0))) {
      return ScalaJS.impls.scala_testing_Show$class__testMethod$1__Lscala_testing_Show__Ljava_lang_reflect_Method__Lscala_collection_Seq__Lscala_Symbol__Lscala_collection_Seq__T($$this, ScalaJS.as.java_lang_reflect_Method(x1.head__O()), args1, f, args)
    }
  };
  var o10$2 = ScalaJS.modules.scala_collection_immutable_List().unapplySeq__Lscala_collection_Seq__Lscala_Some(x1$2);
  if ((!o10$2.isEmpty__Z())) {
    if (((!ScalaJS.anyRefEqEq(o10$2.get__O(), null)) && (ScalaJS.as.scala_collection_LinearSeqOptimized(o10$2.get__O()).lengthCompare__I__I(1) === 0))) {
      var m$2 = ScalaJS.as.java_lang_reflect_Method(ScalaJS.as.scala_collection_LinearSeqOptimized(o10$2.get__O()).apply__I__O(0));
      return ScalaJS.impls.scala_testing_Show$class__testMethod$1__Lscala_testing_Show__Ljava_lang_reflect_Method__Lscala_collection_Seq__Lscala_Symbol__Lscala_collection_Seq__T($$this, m$2, args1, f, args)
    }
  };
  return ("cannot disambiguate between multiple implementations of " + f.name__T())
});
ScalaJS.impls.scala_testing_Show$class__liftedTree1$1__Lscala_testing_Show__Lscala_collection_Seq__Ljava_lang_reflect_Method__O = (function($$this, args1$1, meth$1) {
  try {
    return meth$1.invoke__O__AO__O($$this, ScalaJS.asArrayOf.java_lang_Object(args1$1.toArray__Lscala_reflect_ClassTag__O(ScalaJS.modules.scala_reflect_ClassTag().AnyRef__Lscala_reflect_ClassTag()), 1))
  } catch ($jsexc$) {
    if (ScalaJS.is.java_lang_IllegalAccessException($jsexc$)) {
      var ex$3 = $jsexc$;
      return ex$3
    } else {
      if (ScalaJS.is.java_lang_IllegalArgumentException($jsexc$)) {
        var ex$2 = $jsexc$;
        return ex$2
      } else {
        if (ScalaJS.is.java_lang_reflect_InvocationTargetException($jsexc$)) {
          var ex = $jsexc$;
          return ex
        } else {
          throw $jsexc$
        }
      }
    }
  }
});
ScalaJS.impls.scala_testing_Show$class__testMethod$1__Lscala_testing_Show__Ljava_lang_reflect_Method__Lscala_collection_Seq__Lscala_Symbol__Lscala_collection_Seq__T = (function($$this, meth, args1$1, f$1, args$1) {
  return ((((("" + f$1.name__T()) + "(") + args$1.mkString__T__T(",")) + ")  gives  ") + ScalaJS.impls.scala_testing_Show$class__liftedTree1$1__Lscala_testing_Show__Lscala_collection_Seq__Ljava_lang_reflect_Method__O($$this, args1$1, meth))
});
ScalaJS.impls.scala_testing_Show$class__$init$__Lscala_testing_Show__V = (function($$this) {
  /*<skip>*/
});
//@ sourceMappingURL=Show$class.js.map
