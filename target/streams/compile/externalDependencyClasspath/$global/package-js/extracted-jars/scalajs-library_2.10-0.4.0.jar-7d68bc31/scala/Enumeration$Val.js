/** @constructor */
ScalaJS.c.scala_Enumeration$Val = (function() {
  ScalaJS.c.scala_Enumeration$Value.call(this);
  this.scala$Enumeration$Val$$i$f = 0;
  this.name$2 = null
});
ScalaJS.c.scala_Enumeration$Val.prototype = new ScalaJS.inheritable.scala_Enumeration$Value();
ScalaJS.c.scala_Enumeration$Val.prototype.constructor = ScalaJS.c.scala_Enumeration$Val;
ScalaJS.c.scala_Enumeration$Val.prototype.id__I = (function() {
  return this.scala$Enumeration$Val$$i$f
});
ScalaJS.c.scala_Enumeration$Val.prototype.toString__T = (function() {
  if ((!ScalaJS.anyRefEqEq(this.name$2, null))) {
    return this.name$2
  } else {
    try {
      return this.scala$Enumeration$Val$$$outer__Lscala_Enumeration().scala$Enumeration$$nameOf__I__T(this.scala$Enumeration$Val$$i$f)
    } catch ($jsexc$) {
      if (ScalaJS.is.java_util_NoSuchElementException($jsexc$)) {
        return (("<Invalid enum: no field for #" + ScalaJS.bI(this.scala$Enumeration$Val$$i$f)) + ">")
      } else {
        throw $jsexc$
      }
    }
  }
});
ScalaJS.c.scala_Enumeration$Val.prototype.readResolve__O = (function() {
  var enum$2 = ScalaJS.as.scala_Enumeration(this.scala$Enumeration$Val$$$outer__Lscala_Enumeration().readResolve__O());
  if (ScalaJS.anyRefEqEq(enum$2.scala$Enumeration$$vmap__Lscala_collection_mutable_Map(), null)) {
    return this
  } else {
    return enum$2.scala$Enumeration$$vmap__Lscala_collection_mutable_Map().apply__O__O(ScalaJS.bI(this.scala$Enumeration$Val$$i$f))
  }
});
ScalaJS.c.scala_Enumeration$Val.prototype.scala$Enumeration$Val$$$outer__Lscala_Enumeration = (function() {
  return this.$$outer$f
});
ScalaJS.c.scala_Enumeration$Val.prototype.init___Lscala_Enumeration__I__T = (function($$outer, i, name) {
  this.scala$Enumeration$Val$$i$f = i;
  this.name$2 = name;
  ScalaJS.c.scala_Enumeration$Value.prototype.init___Lscala_Enumeration.call(this, $$outer);
  ScalaJS.modules.scala_Predef().assert__Z__Lscala_Function0__V((!$$outer.scala$Enumeration$$vmap__Lscala_collection_mutable_Map().isDefinedAt__O__Z(ScalaJS.bI(i))), new ScalaJS.c.scala_scalajs_runtime_AnonFunction0().init___Lscala_scalajs_js_Function0((function(arg$outer) {
    return (function() {
      return ("Duplicate id: " + ScalaJS.bI(arg$outer.scala$Enumeration$Val$$i$f))
    })
  })(this)));
  $$outer.scala$Enumeration$$vmap__Lscala_collection_mutable_Map().update__O__O__V(ScalaJS.bI(i), this);
  $$outer.scala$Enumeration$$vsetDefined$und$eq__Z__V(false);
  $$outer.nextId$und$eq__I__V((i + 1));
  if (($$outer.nextId__I() > $$outer.scala$Enumeration$$topId__I())) {
    $$outer.scala$Enumeration$$topId$und$eq__I__V($$outer.nextId__I())
  };
  if ((i < $$outer.scala$Enumeration$$bottomId__I())) {
    $$outer.scala$Enumeration$$bottomId$und$eq__I__V(i)
  };
  return this
});
ScalaJS.c.scala_Enumeration$Val.prototype.init___Lscala_Enumeration__I = (function($$outer, i) {
  ScalaJS.c.scala_Enumeration$Val.prototype.init___Lscala_Enumeration__I__T.call(this, $$outer, i, $$outer.scala$Enumeration$$nextNameOrNull__T());
  return this
});
ScalaJS.c.scala_Enumeration$Val.prototype.init___Lscala_Enumeration__T = (function($$outer, name) {
  ScalaJS.c.scala_Enumeration$Val.prototype.init___Lscala_Enumeration__I__T.call(this, $$outer, $$outer.nextId__I(), name);
  return this
});
ScalaJS.c.scala_Enumeration$Val.prototype.init___Lscala_Enumeration = (function($$outer) {
  ScalaJS.c.scala_Enumeration$Val.prototype.init___Lscala_Enumeration__I.call(this, $$outer, $$outer.nextId__I());
  return this
});
ScalaJS.c.scala_Enumeration$Val.prototype.scala$Enumeration$Val$$$outer__ = (function() {
  return this.scala$Enumeration$Val$$$outer__Lscala_Enumeration()
});
ScalaJS.c.scala_Enumeration$Val.prototype.readResolve__ = (function() {
  return this.readResolve__O()
});
/** @constructor */
ScalaJS.inheritable.scala_Enumeration$Val = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_Enumeration$Val.prototype = ScalaJS.c.scala_Enumeration$Val.prototype;
ScalaJS.is.scala_Enumeration$Val = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_Enumeration$Val)))
});
ScalaJS.as.scala_Enumeration$Val = (function(obj) {
  if ((ScalaJS.is.scala_Enumeration$Val(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.Enumeration$Val")
  }
});
ScalaJS.isArrayOf.scala_Enumeration$Val = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_Enumeration$Val)))
});
ScalaJS.asArrayOf.scala_Enumeration$Val = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_Enumeration$Val(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.Enumeration$Val;", depth)
  }
});
ScalaJS.data.scala_Enumeration$Val = new ScalaJS.ClassTypeData({
  scala_Enumeration$Val: 0
}, false, "scala.Enumeration$Val", ScalaJS.data.scala_Enumeration$Value, {
  scala_Enumeration$Val: 1,
  scala_Enumeration$Value: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_math_Ordered: 1,
  java_lang_Comparable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_Enumeration$Val.prototype.$classData = ScalaJS.data.scala_Enumeration$Val;
//@ sourceMappingURL=Enumeration$Val.js.map
