/** @constructor */
ScalaJS.c.scala_collection_immutable_Stream$StreamWithFilter = (function() {
  ScalaJS.c.scala_collection_TraversableLike$WithFilter.call(this);
  this.scala$collection$immutable$Stream$StreamWithFilter$$p$f = null
});
ScalaJS.c.scala_collection_immutable_Stream$StreamWithFilter.prototype = new ScalaJS.inheritable.scala_collection_TraversableLike$WithFilter();
ScalaJS.c.scala_collection_immutable_Stream$StreamWithFilter.prototype.constructor = ScalaJS.c.scala_collection_immutable_Stream$StreamWithFilter;
ScalaJS.c.scala_collection_immutable_Stream$StreamWithFilter.prototype.map__Lscala_Function1__Lscala_collection_generic_CanBuildFrom__O = (function(f$2, bf$2) {
  if (this.scala$collection$immutable$Stream$StreamWithFilter$$$outer__Lscala_collection_immutable_Stream().scala$collection$immutable$Stream$$isStreamBuilder__Lscala_collection_generic_CanBuildFrom__Z(bf$2)) {
    return this.scala$collection$immutable$Stream$StreamWithFilter$$$outer__Lscala_collection_immutable_Stream().scala$collection$immutable$Stream$$asThat__O__O(this.scala$collection$immutable$Stream$StreamWithFilter$$tailMap$1__Lscala_collection_immutable_Stream__Lscala_Function1__Lscala_collection_immutable_Stream(this.scala$collection$immutable$Stream$StreamWithFilter$$$outer__Lscala_collection_immutable_Stream(), f$2))
  } else {
    return ScalaJS.c.scala_collection_TraversableLike$WithFilter.prototype.map__Lscala_Function1__Lscala_collection_generic_CanBuildFrom__O.call(this, f$2, bf$2)
  }
});
ScalaJS.c.scala_collection_immutable_Stream$StreamWithFilter.prototype.flatMap__Lscala_Function1__Lscala_collection_generic_CanBuildFrom__O = (function(f, bf) {
  if (this.scala$collection$immutable$Stream$StreamWithFilter$$$outer__Lscala_collection_immutable_Stream().scala$collection$immutable$Stream$$isStreamBuilder__Lscala_collection_generic_CanBuildFrom__Z(bf)) {
    return this.scala$collection$immutable$Stream$StreamWithFilter$$$outer__Lscala_collection_immutable_Stream().scala$collection$immutable$Stream$$asThat__O__O(this.scala$collection$immutable$Stream$StreamWithFilter$$tailFlatMap$1__Lscala_collection_immutable_Stream__Lscala_Function1__Lscala_collection_immutable_Stream(this.scala$collection$immutable$Stream$StreamWithFilter$$$outer__Lscala_collection_immutable_Stream(), f))
  } else {
    return ScalaJS.c.scala_collection_TraversableLike$WithFilter.prototype.flatMap__Lscala_Function1__Lscala_collection_generic_CanBuildFrom__O.call(this, f, bf)
  }
});
ScalaJS.c.scala_collection_immutable_Stream$StreamWithFilter.prototype.foreach__Lscala_Function1__V = (function(f) {
  this.scala$collection$immutable$Stream$StreamWithFilter$$$outer__Lscala_collection_immutable_Stream().foreach__Lscala_Function1__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(arg$outer, f$5) {
    return (function(x) {
      if (ScalaJS.uZ(arg$outer.scala$collection$immutable$Stream$StreamWithFilter$$p$f.apply__O__O(x))) {
        return f$5.apply__O__O(x)
      } else {
        return ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit()
      }
    })
  })(this, f)))
});
ScalaJS.c.scala_collection_immutable_Stream$StreamWithFilter.prototype.withFilter__Lscala_Function1__Lscala_collection_immutable_Stream$StreamWithFilter = (function(q) {
  return new ScalaJS.c.scala_collection_immutable_Stream$StreamWithFilter().init___Lscala_collection_immutable_Stream__Lscala_Function1(this.scala$collection$immutable$Stream$StreamWithFilter$$$outer__Lscala_collection_immutable_Stream(), new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(arg$outer, q$1) {
    return (function(x) {
      return ScalaJS.bZ((ScalaJS.uZ(arg$outer.scala$collection$immutable$Stream$StreamWithFilter$$p$f.apply__O__O(x)) && ScalaJS.uZ(q$1.apply__O__O(x))))
    })
  })(this, q)))
});
ScalaJS.c.scala_collection_immutable_Stream$StreamWithFilter.prototype.scala$collection$immutable$Stream$StreamWithFilter$$$outer__Lscala_collection_immutable_Stream = (function() {
  return ScalaJS.as.scala_collection_immutable_Stream(this.$$outer$f)
});
ScalaJS.c.scala_collection_immutable_Stream$StreamWithFilter.prototype.withFilter__Lscala_Function1__Lscala_collection_generic_FilterMonadic = (function(p) {
  return this.withFilter__Lscala_Function1__Lscala_collection_immutable_Stream$StreamWithFilter(p)
});
ScalaJS.c.scala_collection_immutable_Stream$StreamWithFilter.prototype.withFilter__Lscala_Function1__Lscala_collection_TraversableLike$WithFilter = (function(q) {
  return this.withFilter__Lscala_Function1__Lscala_collection_immutable_Stream$StreamWithFilter(q)
});
ScalaJS.c.scala_collection_immutable_Stream$StreamWithFilter.prototype.scala$collection$immutable$Stream$StreamWithFilter$$tailMap$1__Lscala_collection_immutable_Stream__Lscala_Function1__Lscala_collection_immutable_Stream = (function(coll, f$3) {
  var head = null;
  var tail = new ScalaJS.c.scala_runtime_ObjectRef().init___O(coll);
  while (true) {
    if (ScalaJS.as.scala_collection_immutable_Stream(tail.elem$1).isEmpty__Z()) {
      return ScalaJS.modules.scala_collection_immutable_Stream$Empty()
    };
    head = ScalaJS.as.scala_collection_immutable_Stream(tail.elem$1).head__O();
    tail.elem$1 = ScalaJS.as.scala_collection_immutable_Stream(ScalaJS.as.scala_collection_immutable_Stream(tail.elem$1).tail__O());
    if (ScalaJS.uZ(this.scala$collection$immutable$Stream$StreamWithFilter$$p$f.apply__O__O(head))) {
      return ScalaJS.modules.scala_collection_immutable_Stream$cons().apply__O__Lscala_Function0__Lscala_collection_immutable_Stream$Cons(f$3.apply__O__O(head), new ScalaJS.c.scala_scalajs_runtime_AnonFunction0().init___Lscala_scalajs_js_Function0((function(arg$outer, f$3, tail$1) {
        return (function() {
          return arg$outer.scala$collection$immutable$Stream$StreamWithFilter$$tailMap$1__Lscala_collection_immutable_Stream__Lscala_Function1__Lscala_collection_immutable_Stream(ScalaJS.as.scala_collection_immutable_Stream(tail$1.elem$1), f$3)
        })
      })(this, f$3, tail)))
    }
  };
  throw ScalaJS.unwrapJavaScriptException(new ScalaJS.c.java_lang_RuntimeException().init___())
});
ScalaJS.c.scala_collection_immutable_Stream$StreamWithFilter.prototype.scala$collection$immutable$Stream$StreamWithFilter$$tailFlatMap$1__Lscala_collection_immutable_Stream__Lscala_Function1__Lscala_collection_immutable_Stream = (function(coll, f$4) {
  var head = null;
  var tail = new ScalaJS.c.scala_runtime_ObjectRef().init___O(coll);
  while (true) {
    if (ScalaJS.as.scala_collection_immutable_Stream(tail.elem$1).isEmpty__Z()) {
      return ScalaJS.modules.scala_collection_immutable_Stream$Empty()
    };
    head = ScalaJS.as.scala_collection_immutable_Stream(tail.elem$1).head__O();
    tail.elem$1 = ScalaJS.as.scala_collection_immutable_Stream(ScalaJS.as.scala_collection_immutable_Stream(tail.elem$1).tail__O());
    if (ScalaJS.uZ(this.scala$collection$immutable$Stream$StreamWithFilter$$p$f.apply__O__O(head))) {
      return ScalaJS.as.scala_collection_GenTraversableOnce(f$4.apply__O__O(head)).toStream__Lscala_collection_immutable_Stream().append__Lscala_Function0__Lscala_collection_immutable_Stream(new ScalaJS.c.scala_scalajs_runtime_AnonFunction0().init___Lscala_scalajs_js_Function0((function(arg$outer, f$4, tail$2) {
        return (function() {
          return arg$outer.scala$collection$immutable$Stream$StreamWithFilter$$tailFlatMap$1__Lscala_collection_immutable_Stream__Lscala_Function1__Lscala_collection_immutable_Stream(ScalaJS.as.scala_collection_immutable_Stream(tail$2.elem$1), f$4)
        })
      })(this, f$4, tail)))
    }
  };
  throw ScalaJS.unwrapJavaScriptException(new ScalaJS.c.java_lang_RuntimeException().init___())
});
ScalaJS.c.scala_collection_immutable_Stream$StreamWithFilter.prototype.init___Lscala_collection_immutable_Stream__Lscala_Function1 = (function($$outer, p) {
  this.scala$collection$immutable$Stream$StreamWithFilter$$p$f = p;
  ScalaJS.c.scala_collection_TraversableLike$WithFilter.prototype.init___Lscala_collection_TraversableLike__Lscala_Function1.call(this, $$outer, p);
  return this
});
ScalaJS.c.scala_collection_immutable_Stream$StreamWithFilter.prototype.scala$collection$immutable$Stream$StreamWithFilter$$tailFlatMap$1__Lscala_collection_immutable_Stream__Lscala_Function1__ = (function(coll, f$4) {
  return this.scala$collection$immutable$Stream$StreamWithFilter$$tailFlatMap$1__Lscala_collection_immutable_Stream__Lscala_Function1__Lscala_collection_immutable_Stream(coll, f$4)
});
ScalaJS.c.scala_collection_immutable_Stream$StreamWithFilter.prototype.scala$collection$immutable$Stream$StreamWithFilter$$tailMap$1__Lscala_collection_immutable_Stream__Lscala_Function1__ = (function(coll$2, f$3) {
  return this.scala$collection$immutable$Stream$StreamWithFilter$$tailMap$1__Lscala_collection_immutable_Stream__Lscala_Function1__Lscala_collection_immutable_Stream(coll$2, f$3)
});
ScalaJS.c.scala_collection_immutable_Stream$StreamWithFilter.prototype.scala$collection$immutable$Stream$StreamWithFilter$$$outer__ = (function() {
  return this.scala$collection$immutable$Stream$StreamWithFilter$$$outer__Lscala_collection_immutable_Stream()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_immutable_Stream$StreamWithFilter = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_immutable_Stream$StreamWithFilter.prototype = ScalaJS.c.scala_collection_immutable_Stream$StreamWithFilter.prototype;
ScalaJS.is.scala_collection_immutable_Stream$StreamWithFilter = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_immutable_Stream$StreamWithFilter)))
});
ScalaJS.as.scala_collection_immutable_Stream$StreamWithFilter = (function(obj) {
  if ((ScalaJS.is.scala_collection_immutable_Stream$StreamWithFilter(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.immutable.Stream$StreamWithFilter")
  }
});
ScalaJS.isArrayOf.scala_collection_immutable_Stream$StreamWithFilter = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_immutable_Stream$StreamWithFilter)))
});
ScalaJS.asArrayOf.scala_collection_immutable_Stream$StreamWithFilter = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_immutable_Stream$StreamWithFilter(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.immutable.Stream$StreamWithFilter;", depth)
  }
});
ScalaJS.data.scala_collection_immutable_Stream$StreamWithFilter = new ScalaJS.ClassTypeData({
  scala_collection_immutable_Stream$StreamWithFilter: 0
}, false, "scala.collection.immutable.Stream$StreamWithFilter", ScalaJS.data.scala_collection_TraversableLike$WithFilter, {
  scala_collection_immutable_Stream$StreamWithFilter: 1,
  scala_collection_TraversableLike$WithFilter: 1,
  scala_collection_generic_FilterMonadic: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_immutable_Stream$StreamWithFilter.prototype.$classData = ScalaJS.data.scala_collection_immutable_Stream$StreamWithFilter;
//@ sourceMappingURL=Stream$StreamWithFilter.js.map
