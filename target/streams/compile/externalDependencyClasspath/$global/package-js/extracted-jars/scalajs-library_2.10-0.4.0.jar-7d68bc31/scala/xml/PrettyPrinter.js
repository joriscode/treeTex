/** @constructor */
ScalaJS.c.scala_xml_PrettyPrinter = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.width$1 = 0;
  this.step$1 = 0;
  this.items$1 = null;
  this.cur$1 = 0;
  this.Break$module$1 = null;
  this.Box$module$1 = null;
  this.Para$module$1 = null
});
ScalaJS.c.scala_xml_PrettyPrinter.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_xml_PrettyPrinter.prototype.constructor = ScalaJS.c.scala_xml_PrettyPrinter;
ScalaJS.c.scala_xml_PrettyPrinter.prototype.Break$lzycompute__p1__Lscala_xml_PrettyPrinter$Break$ = (function() {
  if ((this.Break$module$1 === null)) {
    this.Break$module$1 = new ScalaJS.c.scala_xml_PrettyPrinter$Break$().init___Lscala_xml_PrettyPrinter(this)
  };
  ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
  return this.Break$module$1
});
ScalaJS.c.scala_xml_PrettyPrinter.prototype.Box$lzycompute__p1__Lscala_xml_PrettyPrinter$Box$ = (function() {
  if ((this.Box$module$1 === null)) {
    this.Box$module$1 = new ScalaJS.c.scala_xml_PrettyPrinter$Box$().init___Lscala_xml_PrettyPrinter(this)
  };
  ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
  return this.Box$module$1
});
ScalaJS.c.scala_xml_PrettyPrinter.prototype.Para$lzycompute__p1__Lscala_xml_PrettyPrinter$Para$ = (function() {
  if ((this.Para$module$1 === null)) {
    this.Para$module$1 = new ScalaJS.c.scala_xml_PrettyPrinter$Para$().init___Lscala_xml_PrettyPrinter(this)
  };
  ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
  return this.Para$module$1
});
ScalaJS.c.scala_xml_PrettyPrinter.prototype.Break__Lscala_xml_PrettyPrinter$Break$ = (function() {
  if ((this.Break$module$1 === null)) {
    return this.Break$lzycompute__p1__Lscala_xml_PrettyPrinter$Break$()
  } else {
    return this.Break$module$1
  }
});
ScalaJS.c.scala_xml_PrettyPrinter.prototype.Box__Lscala_xml_PrettyPrinter$Box$ = (function() {
  if ((this.Box$module$1 === null)) {
    return this.Box$lzycompute__p1__Lscala_xml_PrettyPrinter$Box$()
  } else {
    return this.Box$module$1
  }
});
ScalaJS.c.scala_xml_PrettyPrinter.prototype.Para__Lscala_xml_PrettyPrinter$Para$ = (function() {
  if ((this.Para$module$1 === null)) {
    return this.Para$lzycompute__p1__Lscala_xml_PrettyPrinter$Para$()
  } else {
    return this.Para$module$1
  }
});
ScalaJS.c.scala_xml_PrettyPrinter.prototype.items__Lscala_collection_immutable_List = (function() {
  return this.items$1
});
ScalaJS.c.scala_xml_PrettyPrinter.prototype.items$und$eq__Lscala_collection_immutable_List__V = (function(x$1) {
  this.items$1 = x$1
});
ScalaJS.c.scala_xml_PrettyPrinter.prototype.cur__I = (function() {
  return this.cur$1
});
ScalaJS.c.scala_xml_PrettyPrinter.prototype.cur$und$eq__I__V = (function(x$1) {
  this.cur$1 = x$1
});
ScalaJS.c.scala_xml_PrettyPrinter.prototype.reset__V = (function() {
  this.cur$und$eq__I__V(0);
  this.items$und$eq__Lscala_collection_immutable_List__V(ScalaJS.modules.scala_collection_immutable_Nil())
});
ScalaJS.c.scala_xml_PrettyPrinter.prototype.cut__T__I__Lscala_collection_immutable_List = (function(s, ind) {
  var tmp = (this.width$1 - this.cur__I());
  if ((ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__length__Lscala_scalajs_runtime_RuntimeString__I(s) <= tmp)) {
    return ScalaJS.modules.scala_collection_immutable_List().apply__Lscala_collection_Seq__Lscala_collection_immutable_List(ScalaJS.modules.scala_Predef().wrapRefArray__AO__Lscala_collection_mutable_WrappedArray(ScalaJS.asArrayOf.java_lang_Object(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.scala_xml_PrettyPrinter$Box.getArrayOf(), [new ScalaJS.c.scala_xml_PrettyPrinter$Box().init___Lscala_xml_PrettyPrinter__I__T(this, ind, s)]), 1)))
  };
  var sb = new ScalaJS.c.scala_collection_mutable_StringBuilder().init___();
  var i = ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__indexOf__Lscala_scalajs_runtime_RuntimeString__I__I(s, 32);
  if (((i > tmp) || (i === -1))) {
    throw new ScalaJS.c.scala_xml_PrettyPrinter$BrokenException().init___Lscala_xml_PrettyPrinter(this)
  };
  var last = ScalaJS.modules.scala_collection_immutable_Nil();
  while (((i !== -1) && (i < tmp))) {
    var x$1 = i;
    last = last.$$colon$colon__O__Lscala_collection_immutable_List(ScalaJS.bI(x$1));
    i = ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__indexOf__Lscala_scalajs_runtime_RuntimeString__I__I__I(s, 32, (i + 1))
  };
  var res = ScalaJS.modules.scala_collection_immutable_Nil();
  while ((!ScalaJS.anyRefEqEq(ScalaJS.modules.scala_collection_immutable_Nil(), last))) {
    try {
      var b = new ScalaJS.c.scala_xml_PrettyPrinter$Box().init___Lscala_xml_PrettyPrinter__I__T(this, ind, ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__substring__Lscala_scalajs_runtime_RuntimeString__I__I__T(s, 0, ScalaJS.uI(last.head__O())));
      this.cur$und$eq__I__V(ind);
      var x$3 = b;
      var x$2 = this.Break__Lscala_xml_PrettyPrinter$Break$();
      var jsx$1 = this.cut__T__I__Lscala_collection_immutable_List(ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__substring__Lscala_scalajs_runtime_RuntimeString__I__I__T(s, ScalaJS.uI(last.head__O()), ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__length__Lscala_scalajs_runtime_RuntimeString__I(s)), ind).$$colon$colon__O__Lscala_collection_immutable_List(x$2);
      res = jsx$1.$$colon$colon__O__Lscala_collection_immutable_List(x$3);
      last = ScalaJS.as.scala_collection_immutable_List(last.tail__O())
    } catch ($jsexc$) {
      if (ScalaJS.is.scala_xml_PrettyPrinter$BrokenException($jsexc$)) {
        last = ScalaJS.as.scala_collection_immutable_List(last.tail__O())
      } else {
        throw $jsexc$
      }
    }
  };
  throw new ScalaJS.c.scala_xml_PrettyPrinter$BrokenException().init___Lscala_xml_PrettyPrinter(this)
});
ScalaJS.c.scala_xml_PrettyPrinter.prototype.makeBox__I__T__V = (function(ind, s) {
  if (((this.cur__I() + ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__length__Lscala_scalajs_runtime_RuntimeString__I(s)) > this.width$1)) {
    this.items$und$eq__Lscala_collection_immutable_List__V(this.items__Lscala_collection_immutable_List().$$colon$colon__O__Lscala_collection_immutable_List(new ScalaJS.c.scala_xml_PrettyPrinter$Box().init___Lscala_xml_PrettyPrinter__I__T(this, ind, s)));
    this.cur$und$eq__I__V((this.cur__I() + ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__length__Lscala_scalajs_runtime_RuntimeString__I(s)))
  } else {
    try {
      this.cut__T__I__Lscala_collection_immutable_List(s, ind).foreach__Lscala_Function1__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(arg$outer) {
        return (function(x$4) {
          arg$outer.items$und$eq__Lscala_collection_immutable_List__V(arg$outer.items__Lscala_collection_immutable_List().$$colon$colon__O__Lscala_collection_immutable_List(x$4));
          return ScalaJS.bV(undefined)
        })
      })(this)))
    } catch ($jsexc$) {
      if (ScalaJS.is.scala_xml_PrettyPrinter$BrokenException($jsexc$)) {
        this.makePara__I__T__V(ind, s)
      } else {
        throw $jsexc$
      }
    }
  }
});
ScalaJS.c.scala_xml_PrettyPrinter.prototype.makePara__I__T__V = (function(ind, s) {
  var x$7 = this.Break__Lscala_xml_PrettyPrinter$Break$();
  var x$6 = new ScalaJS.c.scala_xml_PrettyPrinter$Para().init___Lscala_xml_PrettyPrinter__T(this, s);
  var x$5 = this.Break__Lscala_xml_PrettyPrinter$Break$();
  var jsx$4 = this.items__Lscala_collection_immutable_List().$$colon$colon__O__Lscala_collection_immutable_List(x$5);
  var jsx$3 = jsx$4.$$colon$colon__O__Lscala_collection_immutable_List(x$6);
  var jsx$2 = jsx$3.$$colon$colon__O__Lscala_collection_immutable_List(x$7);
  this.items$und$eq__Lscala_collection_immutable_List__V(jsx$2);
  this.cur$und$eq__I__V(ind)
});
ScalaJS.c.scala_xml_PrettyPrinter.prototype.makeBreak__V = (function() {
  var x$8 = this.Break__Lscala_xml_PrettyPrinter$Break$();
  var jsx$5 = this.items__Lscala_collection_immutable_List().$$colon$colon__O__Lscala_collection_immutable_List(x$8);
  this.items$und$eq__Lscala_collection_immutable_List__V(jsx$5);
  this.cur$und$eq__I__V(0)
});
ScalaJS.c.scala_xml_PrettyPrinter.prototype.leafTag__Lscala_xml_Node__T = (function(n) {
  return ScalaJS.modules.scala_xml_Utility().sbToString__Lscala_Function1__T(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(arg$outer, n$1) {
    return (function(sb) {
      arg$outer.scala$xml$PrettyPrinter$$mkLeaf$1__Lscala_collection_mutable_StringBuilder__Lscala_xml_Node__V(sb, n$1);
      return ScalaJS.bV(undefined)
    })
  })(this, n)))
});
ScalaJS.c.scala_xml_PrettyPrinter.prototype.startTag__Lscala_xml_Node__Lscala_xml_NamespaceBinding__Lscala_Tuple2 = (function(n, pscope) {
  var i = new ScalaJS.c.scala_runtime_IntRef().init___I(0);
  return new ScalaJS.c.scala_Tuple2().init___O__O(ScalaJS.modules.scala_xml_Utility().sbToString__Lscala_Function1__T(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(arg$outer, n$2, pscope$1, i$1) {
    return (function(sb) {
      arg$outer.scala$xml$PrettyPrinter$$mkStart$1__Lscala_collection_mutable_StringBuilder__Lscala_xml_Node__Lscala_xml_NamespaceBinding__Lscala_runtime_IntRef__V(sb, n$2, pscope$1, i$1);
      return ScalaJS.bV(undefined)
    })
  })(this, n, pscope, i))), ScalaJS.bI(i.elem$1))
});
ScalaJS.c.scala_xml_PrettyPrinter.prototype.endTag__Lscala_xml_Node__T = (function(n) {
  return ScalaJS.modules.scala_xml_Utility().sbToString__Lscala_Function1__T(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(arg$outer, n$3) {
    return (function(sb) {
      arg$outer.scala$xml$PrettyPrinter$$mkEnd$1__Lscala_collection_mutable_StringBuilder__Lscala_xml_Node__V(sb, n$3);
      return ScalaJS.bV(undefined)
    })
  })(this, n)))
});
ScalaJS.c.scala_xml_PrettyPrinter.prototype.childrenAreLeaves__Lscala_xml_Node__Z = (function(n) {
  return n.child__Lscala_collection_Seq().forall__Lscala_Function1__Z(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(arg$outer) {
    return (function(l) {
      return ScalaJS.bZ(arg$outer.scala$xml$PrettyPrinter$$isLeaf$1__Lscala_xml_Node__Z(l))
    })
  })(this)))
});
ScalaJS.c.scala_xml_PrettyPrinter.prototype.fits__T__Z = (function(test) {
  return (ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__length__Lscala_scalajs_runtime_RuntimeString__I(test) < (this.width$1 - this.cur__I()))
});
ScalaJS.c.scala_xml_PrettyPrinter.prototype.doPreserve__p1__Lscala_xml_Node__Z = (function(node) {
  return ScalaJS.uZ(node.attribute__T__T__Lscala_Option(ScalaJS.modules.scala_xml_XML().namespace__T(), ScalaJS.modules.scala_xml_XML().space__T()).map__Lscala_Function1__Lscala_Option(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function() {
    return (function(x$9) {
      return ScalaJS.bZ(ScalaJS.anyRefEqEq(x$9.toString__T(), ScalaJS.modules.scala_xml_XML().preserve__T()))
    })
  })())).getOrElse__Lscala_Function0__O(new ScalaJS.c.scala_scalajs_runtime_AnonFunction0().init___Lscala_scalajs_js_Function0((function() {
    return (function() {
      return ScalaJS.bZ(false)
    })
  })())))
});
ScalaJS.c.scala_xml_PrettyPrinter.prototype.traverse__Lscala_xml_Node__Lscala_xml_NamespaceBinding__I__V = (function(node, pscope, ind) {
  var x1 = node;
  matchEnd9: {
    var o12 = ScalaJS.modules.scala_xml_Text().unapply__O__Lscala_Option(x1);
    if ((!o12.isEmpty__Z())) {
      var s = ScalaJS.as.java_lang_String(o12.get__O());
      if (ScalaJS.anyRefEqEq(ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__trim__Lscala_scalajs_runtime_RuntimeString__T(s), "")) {
        ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
        break matchEnd9
      }
    };
    matchEnd14: {
      if (ScalaJS.is.scala_xml_Atom(x1)) {
        var jsx$6 = true;
        break matchEnd14
      };
      if (ScalaJS.is.scala_xml_Comment(x1)) {
        var jsx$6 = true;
        break matchEnd14
      };
      if (ScalaJS.is.scala_xml_EntityRef(x1)) {
        var jsx$6 = true;
        break matchEnd14
      };
      if (ScalaJS.is.scala_xml_ProcInstr(x1)) {
        var jsx$6 = true;
        break matchEnd14
      };
      var jsx$6 = false;
      break matchEnd14
    };
    if (jsx$6) {
      this.makeBox__I__T__V(ind, ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__trim__Lscala_scalajs_runtime_RuntimeString__T(node.toString__T()));
      ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
      break matchEnd9
    };
    if (ScalaJS.is.scala_xml_Group(x1)) {
      var x3 = ScalaJS.as.scala_xml_Group(x1);
      var xs = x3.nodes__Lscala_collection_Seq();
      this.traverse__Lscala_collection_Iterator__Lscala_xml_NamespaceBinding__I__V(xs.iterator__Lscala_collection_Iterator(), pscope, ind);
      ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
      break matchEnd9
    };
    var sb = new ScalaJS.c.scala_collection_mutable_StringBuilder().init___();
    ScalaJS.modules.scala_xml_Utility().serialize__Lscala_xml_Node__Lscala_xml_NamespaceBinding__Lscala_collection_mutable_StringBuilder__Z__Z__Z__Lscala_Enumeration$Value__Lscala_collection_mutable_StringBuilder(node, pscope, sb, false, ScalaJS.modules.scala_xml_Utility().serialize$default$5__Z(), ScalaJS.modules.scala_xml_Utility().serialize$default$6__Z(), ScalaJS.modules.scala_xml_Utility().serialize$default$7__Lscala_Enumeration$Value());
    if (this.doPreserve__p1__Lscala_xml_Node__Z(node)) {
      var test = sb.toString__T()
    } else {
      var test = ScalaJS.as.java_lang_String(ScalaJS.as.scala_xml_Atom(ScalaJS.modules.scala_xml_TextBuffer().fromString__T__Lscala_xml_TextBuffer(sb.toString__T()).toText__Lscala_collection_Seq().apply__I__O(0)).data__O())
    };
    if ((this.childrenAreLeaves__Lscala_xml_Node__Z(node) && this.fits__T__Z(test))) {
      this.makeBox__I__T__V(ind, test);
      ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
      break matchEnd9
    } else {
      var x1$2 = this.startTag__Lscala_xml_Node__Lscala_xml_NamespaceBinding__Lscala_Tuple2(node, pscope);
      matchEnd3: {
        if ((x1$2 !== null)) {
          var stg = ScalaJS.as.java_lang_String(x1$2.$$und1__O());
          var len2 = x1$2.$$und2$mcI$sp__I();
          var x$10 = new ScalaJS.c.scala_Tuple2().init___O__O(stg, ScalaJS.bI(len2));
          break matchEnd3
        };
        throw new ScalaJS.c.scala_MatchError().init___O(x1$2)
      };
      var stg$2 = ScalaJS.as.java_lang_String(x$10.$$und1__O());
      var len2$2 = x$10.$$und2$mcI$sp__I();
      var etg = this.endTag__Lscala_xml_Node__T(node);
      if ((ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__length__Lscala_scalajs_runtime_RuntimeString__I(stg$2) < (this.width$1 - this.cur__I()))) {
        this.makeBox__I__T__V(ind, stg$2);
        this.makeBreak__V();
        this.traverse__Lscala_collection_Iterator__Lscala_xml_NamespaceBinding__I__V(node.child__Lscala_collection_Seq().iterator__Lscala_collection_Iterator(), node.scope__Lscala_xml_NamespaceBinding(), (ind + this.step$1));
        this.makeBox__I__T__V(ind, etg);
        ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
        break matchEnd9
      } else {
        if ((len2$2 < (this.width$1 - this.cur__I()))) {
          this.makeBox__I__T__V(ind, ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__substring__Lscala_scalajs_runtime_RuntimeString__I__I__T(stg$2, 0, len2$2));
          this.makeBreak__V();
          this.makeBox__I__T__V(ind, ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__substring__Lscala_scalajs_runtime_RuntimeString__I__I__T(stg$2, len2$2, ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__length__Lscala_scalajs_runtime_RuntimeString__I(stg$2)));
          this.makeBreak__V();
          this.traverse__Lscala_collection_Iterator__Lscala_xml_NamespaceBinding__I__V(node.child__Lscala_collection_Seq().iterator__Lscala_collection_Iterator(), node.scope__Lscala_xml_NamespaceBinding(), (ind + this.step$1));
          this.makeBox__I__T__V(this.cur__I(), etg);
          this.makeBreak__V();
          ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
          break matchEnd9
        } else {
          this.makeBox__I__T__V(ind, test);
          this.makeBreak__V();
          ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
          break matchEnd9
        }
      }
    }
  }
});
ScalaJS.c.scala_xml_PrettyPrinter.prototype.traverse__Lscala_collection_Iterator__Lscala_xml_NamespaceBinding__I__V = (function(it, scope, ind) {
  it.foreach__Lscala_Function1__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(arg$outer, scope$1, ind$1) {
    return (function(c) {
      arg$outer.traverse__Lscala_xml_Node__Lscala_xml_NamespaceBinding__I__V(c, scope$1, ind$1);
      arg$outer.makeBreak__V();
      return ScalaJS.bV(undefined)
    })
  })(this, scope, ind)))
});
ScalaJS.c.scala_xml_PrettyPrinter.prototype.format__Lscala_xml_Node__Lscala_collection_mutable_StringBuilder__V = (function(n, sb) {
  this.format__Lscala_xml_Node__Lscala_xml_NamespaceBinding__Lscala_collection_mutable_StringBuilder__V(n, null, sb)
});
ScalaJS.c.scala_xml_PrettyPrinter.prototype.format__Lscala_xml_Node__Lscala_xml_NamespaceBinding__Lscala_collection_mutable_StringBuilder__V = (function(n, pscope, sb) {
  var lastwasbreak = new ScalaJS.c.scala_runtime_BooleanRef().init___Z(false);
  this.reset__V();
  this.traverse__Lscala_xml_Node__Lscala_xml_NamespaceBinding__I__V(n, pscope, 0);
  var cur = new ScalaJS.c.scala_runtime_IntRef().init___I(0);
  this.items__Lscala_collection_immutable_List().reverse__Lscala_collection_immutable_List().foreach__Lscala_Function1__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(arg$outer, sb$1, lastwasbreak$1, cur$1) {
    return (function(b) {
      var x1 = b;
      if (ScalaJS.anyRefEqEq(arg$outer.Break__Lscala_xml_PrettyPrinter$Break$(), x1)) {
        if ((!lastwasbreak$1.elem$1)) {
          sb$1.append__C__Lscala_collection_mutable_StringBuilder(10)
        } else {
          ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit()
        };
        lastwasbreak$1.elem$1 = true;
        cur$1.elem$1 = 0;
        return ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit()
      };
      if (ScalaJS.is.scala_xml_PrettyPrinter$Box(x1)) {
        var x2 = ScalaJS.as.scala_xml_PrettyPrinter$Box(x1);
        var i = x2.col__I();
        var s = x2.s__T();
        lastwasbreak$1.elem$1 = false;
        while ((cur$1.elem$1 < i)) {
          sb$1.append__C__Lscala_collection_mutable_StringBuilder(32);
          cur$1.elem$1 = (cur$1.elem$1 + 1)
        };
        return sb$1.append__T__Lscala_collection_mutable_StringBuilder(s)
      };
      if (ScalaJS.is.scala_xml_PrettyPrinter$Para(x1)) {
        var x3 = ScalaJS.as.scala_xml_PrettyPrinter$Para(x1);
        var s$2 = x3.s__T();
        lastwasbreak$1.elem$1 = false;
        return sb$1.append__T__Lscala_collection_mutable_StringBuilder(s$2)
      };
      throw new ScalaJS.c.scala_MatchError().init___O(x1)
    })
  })(this, sb, lastwasbreak, cur)))
});
ScalaJS.c.scala_xml_PrettyPrinter.prototype.format__Lscala_xml_Node__Lscala_xml_NamespaceBinding__T = (function(n, pscope) {
  return ScalaJS.modules.scala_xml_Utility().sbToString__Lscala_Function1__T(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(arg$outer, n$4, pscope$2) {
    return (function(x$11) {
      arg$outer.format__Lscala_xml_Node__Lscala_xml_NamespaceBinding__Lscala_collection_mutable_StringBuilder__V(n$4, pscope$2, x$11);
      return ScalaJS.bV(undefined)
    })
  })(this, n, pscope)))
});
ScalaJS.c.scala_xml_PrettyPrinter.prototype.format$default$2__Lscala_xml_NamespaceBinding = (function() {
  return null
});
ScalaJS.c.scala_xml_PrettyPrinter.prototype.formatNodes__Lscala_collection_Seq__Lscala_xml_NamespaceBinding__T = (function(nodes, pscope) {
  return ScalaJS.modules.scala_xml_Utility().sbToString__Lscala_Function1__T(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(arg$outer, nodes$1, pscope$3) {
    return (function(x$12) {
      arg$outer.formatNodes__Lscala_collection_Seq__Lscala_xml_NamespaceBinding__Lscala_collection_mutable_StringBuilder__V(nodes$1, pscope$3, x$12);
      return ScalaJS.bV(undefined)
    })
  })(this, nodes, pscope)))
});
ScalaJS.c.scala_xml_PrettyPrinter.prototype.formatNodes__Lscala_collection_Seq__Lscala_xml_NamespaceBinding__Lscala_collection_mutable_StringBuilder__V = (function(nodes, pscope, sb) {
  nodes.foreach__Lscala_Function1__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(arg$outer, pscope$4, sb$2) {
    return (function(n) {
      return sb$2.append__T__Lscala_collection_mutable_StringBuilder(arg$outer.format__Lscala_xml_Node__Lscala_xml_NamespaceBinding__T(n, pscope$4))
    })
  })(this, pscope, sb)))
});
ScalaJS.c.scala_xml_PrettyPrinter.prototype.formatNodes$default$2__Lscala_xml_NamespaceBinding = (function() {
  return null
});
ScalaJS.c.scala_xml_PrettyPrinter.prototype.scala$xml$PrettyPrinter$$mkLeaf$1__Lscala_collection_mutable_StringBuilder__Lscala_xml_Node__V = (function(sb, n$1) {
  sb.append__C__Lscala_collection_mutable_StringBuilder(60);
  n$1.nameToString__Lscala_collection_mutable_StringBuilder__Lscala_collection_mutable_StringBuilder(sb);
  n$1.attributes__Lscala_xml_MetaData().buildString__Lscala_collection_mutable_StringBuilder__Lscala_collection_mutable_StringBuilder(sb);
  sb.append__T__Lscala_collection_mutable_StringBuilder("/>")
});
ScalaJS.c.scala_xml_PrettyPrinter.prototype.scala$xml$PrettyPrinter$$mkStart$1__Lscala_collection_mutable_StringBuilder__Lscala_xml_Node__Lscala_xml_NamespaceBinding__Lscala_runtime_IntRef__V = (function(sb, n$2, pscope$1, i$1) {
  sb.append__C__Lscala_collection_mutable_StringBuilder(60);
  n$2.nameToString__Lscala_collection_mutable_StringBuilder__Lscala_collection_mutable_StringBuilder(sb);
  i$1.elem$1 = (sb.length__I() + 1);
  n$2.attributes__Lscala_xml_MetaData().buildString__Lscala_collection_mutable_StringBuilder__Lscala_collection_mutable_StringBuilder(sb);
  n$2.scope__Lscala_xml_NamespaceBinding().buildString__Lscala_collection_mutable_StringBuilder__Lscala_xml_NamespaceBinding__V(sb, pscope$1);
  sb.append__C__Lscala_collection_mutable_StringBuilder(62)
});
ScalaJS.c.scala_xml_PrettyPrinter.prototype.scala$xml$PrettyPrinter$$mkEnd$1__Lscala_collection_mutable_StringBuilder__Lscala_xml_Node__V = (function(sb, n$3) {
  sb.append__T__Lscala_collection_mutable_StringBuilder("</");
  n$3.nameToString__Lscala_collection_mutable_StringBuilder__Lscala_collection_mutable_StringBuilder(sb);
  sb.append__C__Lscala_collection_mutable_StringBuilder(62)
});
ScalaJS.c.scala_xml_PrettyPrinter.prototype.scala$xml$PrettyPrinter$$isLeaf$1__Lscala_xml_Node__Z = (function(l) {
  var x1 = l;
  matchEnd10: {
    if (ScalaJS.is.scala_xml_Atom(x1)) {
      var jsx$7 = true;
      break matchEnd10
    };
    if (ScalaJS.is.scala_xml_Comment(x1)) {
      var jsx$7 = true;
      break matchEnd10
    };
    if (ScalaJS.is.scala_xml_EntityRef(x1)) {
      var jsx$7 = true;
      break matchEnd10
    };
    if (ScalaJS.is.scala_xml_ProcInstr(x1)) {
      var jsx$7 = true;
      break matchEnd10
    };
    var jsx$7 = false;
    break matchEnd10
  };
  if (jsx$7) {
    return true
  };
  return false
});
ScalaJS.c.scala_xml_PrettyPrinter.prototype.init___I__I = (function(width, step) {
  this.width$1 = width;
  this.step$1 = step;
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  this.items$1 = ScalaJS.modules.scala_collection_immutable_Nil();
  this.cur$1 = 0;
  return this
});
ScalaJS.c.scala_xml_PrettyPrinter.prototype.scala$xml$PrettyPrinter$$isLeaf$1__Lscala_xml_Node__ = (function(l) {
  return ScalaJS.bZ(this.scala$xml$PrettyPrinter$$isLeaf$1__Lscala_xml_Node__Z(l))
});
ScalaJS.c.scala_xml_PrettyPrinter.prototype.scala$xml$PrettyPrinter$$mkEnd$1__Lscala_collection_mutable_StringBuilder__Lscala_xml_Node__ = (function(sb, n$3) {
  return ScalaJS.bV(this.scala$xml$PrettyPrinter$$mkEnd$1__Lscala_collection_mutable_StringBuilder__Lscala_xml_Node__V(sb, n$3))
});
ScalaJS.c.scala_xml_PrettyPrinter.prototype.scala$xml$PrettyPrinter$$mkStart$1__Lscala_collection_mutable_StringBuilder__Lscala_xml_Node__Lscala_xml_NamespaceBinding__Lscala_runtime_IntRef__ = (function(sb$2, n$2, pscope$1, i$1) {
  return ScalaJS.bV(this.scala$xml$PrettyPrinter$$mkStart$1__Lscala_collection_mutable_StringBuilder__Lscala_xml_Node__Lscala_xml_NamespaceBinding__Lscala_runtime_IntRef__V(sb$2, n$2, pscope$1, i$1))
});
ScalaJS.c.scala_xml_PrettyPrinter.prototype.scala$xml$PrettyPrinter$$mkLeaf$1__Lscala_collection_mutable_StringBuilder__Lscala_xml_Node__ = (function(sb$3, n$1) {
  return ScalaJS.bV(this.scala$xml$PrettyPrinter$$mkLeaf$1__Lscala_collection_mutable_StringBuilder__Lscala_xml_Node__V(sb$3, n$1))
});
ScalaJS.c.scala_xml_PrettyPrinter.prototype.formatNodes__Lscala_collection_Seq__Lscala_xml_NamespaceBinding__Lscala_collection_mutable_StringBuilder__ = (function(nodes, pscope, sb$4) {
  return ScalaJS.bV(this.formatNodes__Lscala_collection_Seq__Lscala_xml_NamespaceBinding__Lscala_collection_mutable_StringBuilder__V(nodes, pscope, sb$4))
});
ScalaJS.c.scala_xml_PrettyPrinter.prototype.formatNodes__Lscala_collection_Seq__Lscala_xml_NamespaceBinding__ = (function(nodes$2, pscope$2) {
  return this.formatNodes__Lscala_collection_Seq__Lscala_xml_NamespaceBinding__T(nodes$2, pscope$2)
});
ScalaJS.c.scala_xml_PrettyPrinter.prototype.format__Lscala_xml_Node__Lscala_xml_NamespaceBinding__ = (function(n, pscope$3) {
  return this.format__Lscala_xml_Node__Lscala_xml_NamespaceBinding__T(n, pscope$3)
});
ScalaJS.c.scala_xml_PrettyPrinter.prototype.format__Lscala_xml_Node__Lscala_xml_NamespaceBinding__Lscala_collection_mutable_StringBuilder__ = (function(n$4, pscope$4, sb$5) {
  return ScalaJS.bV(this.format__Lscala_xml_Node__Lscala_xml_NamespaceBinding__Lscala_collection_mutable_StringBuilder__V(n$4, pscope$4, sb$5))
});
ScalaJS.c.scala_xml_PrettyPrinter.prototype.format__Lscala_xml_Node__Lscala_collection_mutable_StringBuilder__ = (function(n$5, sb$6) {
  return ScalaJS.bV(this.format__Lscala_xml_Node__Lscala_collection_mutable_StringBuilder__V(n$5, sb$6))
});
ScalaJS.c.scala_xml_PrettyPrinter.prototype.traverse__Lscala_collection_Iterator__Lscala_xml_NamespaceBinding__I__ = (function(it, scope, ind) {
  return ScalaJS.bV(this.traverse__Lscala_collection_Iterator__Lscala_xml_NamespaceBinding__I__V(it, scope, ind))
});
ScalaJS.c.scala_xml_PrettyPrinter.prototype.traverse__Lscala_xml_Node__Lscala_xml_NamespaceBinding__I__ = (function(node, pscope$5, ind$2) {
  return ScalaJS.bV(this.traverse__Lscala_xml_Node__Lscala_xml_NamespaceBinding__I__V(node, pscope$5, ind$2))
});
ScalaJS.c.scala_xml_PrettyPrinter.prototype.fits__T__ = (function(test) {
  return ScalaJS.bZ(this.fits__T__Z(test))
});
ScalaJS.c.scala_xml_PrettyPrinter.prototype.childrenAreLeaves__Lscala_xml_Node__ = (function(n$6) {
  return ScalaJS.bZ(this.childrenAreLeaves__Lscala_xml_Node__Z(n$6))
});
ScalaJS.c.scala_xml_PrettyPrinter.prototype.endTag__Lscala_xml_Node__ = (function(n$7) {
  return this.endTag__Lscala_xml_Node__T(n$7)
});
ScalaJS.c.scala_xml_PrettyPrinter.prototype.startTag__Lscala_xml_Node__Lscala_xml_NamespaceBinding__ = (function(n$8, pscope$6) {
  return this.startTag__Lscala_xml_Node__Lscala_xml_NamespaceBinding__Lscala_Tuple2(n$8, pscope$6)
});
ScalaJS.c.scala_xml_PrettyPrinter.prototype.leafTag__Lscala_xml_Node__ = (function(n$9) {
  return this.leafTag__Lscala_xml_Node__T(n$9)
});
ScalaJS.c.scala_xml_PrettyPrinter.prototype.makeBreak__ = (function() {
  return ScalaJS.bV(this.makeBreak__V())
});
ScalaJS.c.scala_xml_PrettyPrinter.prototype.makePara__I__T__ = (function(ind$3, s) {
  return ScalaJS.bV(this.makePara__I__T__V(ind$3, s))
});
ScalaJS.c.scala_xml_PrettyPrinter.prototype.makeBox__I__T__ = (function(ind$4, s$2) {
  return ScalaJS.bV(this.makeBox__I__T__V(ind$4, s$2))
});
ScalaJS.c.scala_xml_PrettyPrinter.prototype.cut__T__I__ = (function(s$3, ind$5) {
  return this.cut__T__I__Lscala_collection_immutable_List(s$3, ind$5)
});
ScalaJS.c.scala_xml_PrettyPrinter.prototype.reset__ = (function() {
  return ScalaJS.bV(this.reset__V())
});
ScalaJS.c.scala_xml_PrettyPrinter.prototype.cur$und$eq__I__ = (function(x$1) {
  return ScalaJS.bV(this.cur$und$eq__I__V(x$1))
});
ScalaJS.c.scala_xml_PrettyPrinter.prototype.cur__ = (function() {
  return ScalaJS.bI(this.cur__I())
});
ScalaJS.c.scala_xml_PrettyPrinter.prototype.items$und$eq__Lscala_collection_immutable_List__ = (function(x$1$2) {
  return ScalaJS.bV(this.items$und$eq__Lscala_collection_immutable_List__V(x$1$2))
});
ScalaJS.c.scala_xml_PrettyPrinter.prototype.items__ = (function() {
  return this.items__Lscala_collection_immutable_List()
});
ScalaJS.c.scala_xml_PrettyPrinter.prototype.Para__ = (function() {
  return this.Para__Lscala_xml_PrettyPrinter$Para$()
});
ScalaJS.c.scala_xml_PrettyPrinter.prototype.Box__ = (function() {
  return this.Box__Lscala_xml_PrettyPrinter$Box$()
});
ScalaJS.c.scala_xml_PrettyPrinter.prototype.Break__ = (function() {
  return this.Break__Lscala_xml_PrettyPrinter$Break$()
});
/** @constructor */
ScalaJS.inheritable.scala_xml_PrettyPrinter = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_xml_PrettyPrinter.prototype = ScalaJS.c.scala_xml_PrettyPrinter.prototype;
ScalaJS.is.scala_xml_PrettyPrinter = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_xml_PrettyPrinter)))
});
ScalaJS.as.scala_xml_PrettyPrinter = (function(obj) {
  if ((ScalaJS.is.scala_xml_PrettyPrinter(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.xml.PrettyPrinter")
  }
});
ScalaJS.isArrayOf.scala_xml_PrettyPrinter = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_xml_PrettyPrinter)))
});
ScalaJS.asArrayOf.scala_xml_PrettyPrinter = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_xml_PrettyPrinter(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.xml.PrettyPrinter;", depth)
  }
});
ScalaJS.data.scala_xml_PrettyPrinter = new ScalaJS.ClassTypeData({
  scala_xml_PrettyPrinter: 0
}, false, "scala.xml.PrettyPrinter", ScalaJS.data.java_lang_Object, {
  scala_xml_PrettyPrinter: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_xml_PrettyPrinter.prototype.$classData = ScalaJS.data.scala_xml_PrettyPrinter;
//@ sourceMappingURL=PrettyPrinter.js.map
