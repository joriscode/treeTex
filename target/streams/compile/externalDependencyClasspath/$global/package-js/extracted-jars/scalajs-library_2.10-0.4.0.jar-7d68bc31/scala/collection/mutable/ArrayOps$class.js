ScalaJS.impls.scala_collection_mutable_ArrayOps$class__elementClass__Lscala_collection_mutable_ArrayOps__Ljava_lang_Class = (function($$this) {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().arrayElementClass__O__Ljava_lang_Class(ScalaJS.objectGetClass($$this.repr__O()))
});
ScalaJS.impls.scala_collection_mutable_ArrayOps$class__copyToArray__Lscala_collection_mutable_ArrayOps__O__I__I__V = (function($$this, xs, start, len) {
  var l = ScalaJS.modules.scala_math_package().min__I__I__I(len, ScalaJS.modules.scala_runtime_ScalaRunTime().array$undlength__O__I($$this.repr__O()));
  if (((ScalaJS.modules.scala_runtime_ScalaRunTime().array$undlength__O__I(xs) - start) < l)) {
    l = ScalaJS.modules.scala_runtime_RichInt().max$extension__I__I__I(ScalaJS.modules.scala_Predef().intWrapper__I__I((ScalaJS.modules.scala_runtime_ScalaRunTime().array$undlength__O__I(xs) - start)), 0)
  };
  ScalaJS.modules.scala_Array().copy__O__I__O__I__I__V($$this.repr__O(), 0, xs, start, l)
});
ScalaJS.impls.scala_collection_mutable_ArrayOps$class__toArray__Lscala_collection_mutable_ArrayOps__Lscala_reflect_ClassTag__O = (function($$this, evidence$1) {
  var thatElementClass = ScalaJS.modules.scala_runtime_ScalaRunTime().arrayElementClass__O__Ljava_lang_Class(ScalaJS.modules.scala_Predef().implicitly__O__O(evidence$1));
  if ((ScalaJS.impls.scala_collection_mutable_ArrayOps$class__elementClass__Lscala_collection_mutable_ArrayOps__Ljava_lang_Class($$this) === thatElementClass)) {
    return $$this.repr__O()
  } else {
    return $$this.scala$collection$mutable$ArrayOps$$super$toArray__Lscala_reflect_ClassTag__O(evidence$1)
  }
});
ScalaJS.impls.scala_collection_mutable_ArrayOps$class__par__Lscala_collection_mutable_ArrayOps__Lscala_collection_parallel_mutable_ParArray = (function($$this) {
  return ScalaJS.modules.scala_collection_parallel_mutable_ParArray().handoff__O__Lscala_collection_parallel_mutable_ParArray($$this.repr__O())
});
ScalaJS.impls.scala_collection_mutable_ArrayOps$class__flatten__Lscala_collection_mutable_ArrayOps__Lscala_Function1__Lscala_reflect_ClassTag__O = (function($$this, asTrav, m) {
  var b = ScalaJS.modules.scala_Array().newBuilder__Lscala_reflect_ClassTag__Lscala_collection_mutable_ArrayBuilder(m);
  b.sizeHint__I__V(ScalaJS.uI(ScalaJS.modules.scala_Predef().intArrayOps__AI__Lscala_collection_mutable_ArrayOps(ScalaJS.asArrayOf.scala_Int($$this.map__Lscala_Function1__Lscala_collection_generic_CanBuildFrom__O(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function() {
    return (function(x0$1) {
      var x1 = x0$1;
      matchEnd4: {
        if (ScalaJS.is.scala_collection_IndexedSeq(x1)) {
          var x2 = x1;
          var jsx$1 = ScalaJS.as.scala_collection_SeqLike(x2).size__I();
          break matchEnd4
        };
        var jsx$1 = 0;
        break matchEnd4
      };
      return ScalaJS.bI(jsx$1)
    })
  })()), ScalaJS.modules.scala_Array().canBuildFrom__Lscala_reflect_ClassTag__Lscala_collection_generic_CanBuildFrom(ScalaJS.modules.scala_reflect_ClassTag().Int__Lscala_reflect_ClassTag())), 1)).sum__Lscala_math_Numeric__O(ScalaJS.modules.scala_math_Numeric$IntIsIntegral())));
  $$this.foreach__Lscala_Function1__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(b$1, asTrav$1) {
    return (function(xs) {
      return ScalaJS.as.scala_collection_mutable_ArrayBuilder(b$1.$$plus$plus$eq__Lscala_collection_TraversableOnce__Lscala_collection_generic_Growable(ScalaJS.as.scala_collection_TraversableOnce(asTrav$1.apply__O__O(xs))))
    })
  })(b, asTrav)));
  return b.result__O()
});
ScalaJS.impls.scala_collection_mutable_ArrayOps$class__transpose__Lscala_collection_mutable_ArrayOps__Lscala_Function1__AO = (function($$this, asArray) {
  var bb = ScalaJS.modules.scala_Array().newBuilder__Lscala_reflect_ClassTag__Lscala_collection_mutable_ArrayBuilder(ScalaJS.modules.scala_reflect_ClassTag().apply__Ljava_lang_Class__Lscala_reflect_ClassTag(ScalaJS.impls.scala_collection_mutable_ArrayOps$class__elementClass__Lscala_collection_mutable_ArrayOps__Ljava_lang_Class($$this)));
  if ($$this.isEmpty__Z()) {
    return ScalaJS.asArrayOf.java_lang_Object(bb.result__O(), 1)
  } else {
    var bs = ScalaJS.asArrayOf.scala_collection_mutable_ArrayBuilder(ScalaJS.modules.scala_Predef().genericArrayOps__O__Lscala_collection_mutable_ArrayOps(asArray.apply__O__O($$this.head__O())).map__Lscala_Function1__Lscala_collection_generic_CanBuildFrom__O(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(arg$outer) {
      return (function(x$1) {
        return ScalaJS.impls.scala_collection_mutable_ArrayOps$class__mkRowBuilder$1__Lscala_collection_mutable_ArrayOps__Lscala_collection_mutable_ArrayBuilder(arg$outer)
      })
    })($$this)), ScalaJS.modules.scala_Array().canBuildFrom__Lscala_reflect_ClassTag__Lscala_collection_generic_CanBuildFrom(ScalaJS.modules.scala_reflect_ClassTag().apply__Ljava_lang_Class__Lscala_reflect_ClassTag(ScalaJS.data.scala_collection_mutable_ArrayBuilder.getClassOf()))), 1);
    $$this.foreach__Lscala_Function1__V(new ScalaJS.c.scala_collection_mutable_ArrayOps$$anonfun$transpose$1().init___Lscala_collection_mutable_ArrayOps__ALscala_collection_mutable_ArrayBuilder__Lscala_Function1($$this, bs, asArray));
    ScalaJS.modules.scala_Predef().refArrayOps__AO__Lscala_collection_mutable_ArrayOps(ScalaJS.asArrayOf.java_lang_Object(bs, 1)).foreach__Lscala_Function1__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(bb$1) {
      return (function(b) {
        return bb$1.$$plus$eq__O__Lscala_collection_mutable_Builder(b.result__O())
      })
    })(bb)));
    return ScalaJS.asArrayOf.java_lang_Object(bb.result__O(), 1)
  }
});
ScalaJS.impls.scala_collection_mutable_ArrayOps$class__seq__Lscala_collection_mutable_ArrayOps__Lscala_collection_mutable_IndexedSeq = (function($$this) {
  return $$this.thisCollection__Lscala_collection_mutable_IndexedSeq()
});
ScalaJS.impls.scala_collection_mutable_ArrayOps$class__mkRowBuilder$1__Lscala_collection_mutable_ArrayOps__Lscala_collection_mutable_ArrayBuilder = (function($$this) {
  return ScalaJS.modules.scala_Array().newBuilder__Lscala_reflect_ClassTag__Lscala_collection_mutable_ArrayBuilder(ScalaJS.modules.scala_reflect_ClassTag().apply__Ljava_lang_Class__Lscala_reflect_ClassTag(ScalaJS.modules.scala_runtime_ScalaRunTime().arrayElementClass__O__Ljava_lang_Class(ScalaJS.impls.scala_collection_mutable_ArrayOps$class__elementClass__Lscala_collection_mutable_ArrayOps__Ljava_lang_Class($$this))))
});
ScalaJS.impls.scala_collection_mutable_ArrayOps$class__$init$__Lscala_collection_mutable_ArrayOps__V = (function($$this) {
  /*<skip>*/
});
//@ sourceMappingURL=ArrayOps$class.js.map
